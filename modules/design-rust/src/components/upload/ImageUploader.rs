#![allow(non_snake_case)]

use dioxus::document::eval;
use dioxus::prelude::*;

use super::FileUpload::FileInfo;
use super::fileSize::{MaxFileSizeType, format_bytes, parse_file_size};
use crate::components::button::{ButtonSizeType, ButtonVariantType, button_variants};
use crate::components::image::ImageZoom;
use crate::hooks::use_id;
use crate::icons::outline::photography_video::sm::ImagePlusIcon;
use crate::icons::outline::ui_layout::sm::TrashIcon;
use crate::utils::cn;

const IMAGE_MIME_TYPES: &[&str] = &[
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
    "image/svg+xml",
];
const IMAGE_EXTENSIONS: &[&str] = &[".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];

#[derive(Props, Clone, PartialEq)]
pub struct ImageUploaderProps {
    /// Controlled list of image URLs / object-URLs to display.
    pub images: Vec<String>,
    /// Called with metadata when a valid image is selected or dropped.
    pub on_add: EventHandler<FileInfo>,
    /// Called with the index of the image to remove.
    pub on_remove: EventHandler<usize>,
    /// Maximum allowed file size. Defaults to `"10MB"`.
    #[props(default = MaxFileSizeType::Text("10MB".into()))]
    pub max_file_size: MaxFileSizeType,
    /// Allow selecting multiple images at once. Defaults to `false`.
    #[props(default = false)]
    pub multiple: bool,
    #[props(default)]
    pub class: Option<String>,
}

#[component]
pub fn ImageUploader(props: ImageUploaderProps) -> Element {
    let container_id = use_id("image-uploader-container");
    let input_id = use_id("image-uploader-input");

    let mut is_dragging = use_signal(|| false);
    let mut error: Signal<Option<String>> = use_signal(|| None);

    let max_size_bytes = parse_file_size(&props.max_file_size);
    let max_size_display = format_bytes(max_size_bytes);

    let on_add = props.on_add;
    let on_remove = props.on_remove;
    let multiple = props.multiple;

    // Click to open file input.
    let input_id_click = input_id.clone();
    let trigger_input = use_callback(move |()| {
        let id = input_id_click.clone();
        eval(&format!("document.getElementById('{id}').click()"));
    });

    // Validate then emit on_add.
    let show_error_cb = use_callback(move |msg: String| {
        error.set(Some(msg));
        spawn(async move {
            let mut ev = eval("await new Promise(r=>setTimeout(r,3000));dioxus.send(true);");
            if ev.recv::<bool>().await.is_ok() {
                error.set(None);
            }
        });
    });

    let handle_file = use_callback(move |info: FileInfo| {
        if info.size > max_size_bytes {
            show_error_cb.call(format!("File exceeds {max_size_display}"));
            return;
        }
        let mime = info.mime_type.to_lowercase();
        let name = info.name.to_lowercase();
        let valid = IMAGE_MIME_TYPES.iter().any(|m| mime == *m)
            || IMAGE_EXTENSIONS.iter().any(|e| name.ends_with(e));
        if !valid {
            show_error_cb.call("Only image files are accepted".into());
            return;
        }
        on_add.call(info);
    });

    // Persistent eval bridge: drag/drop and input change.
    let _bridge = use_future({
        let cid = container_id.clone();
        let iid = input_id.clone();
        move || {
            let cid = cid.clone();
            let iid = iid.clone();
            async move {
                let js = format!(
                    r#"
const container = document.getElementById('{cid}');
const input = document.getElementById('{iid}');
if (!container || !input) {{ try {{ await dioxus.recv(); }} catch {{}} return; }}
const getInfo = f => f.name+'\x00'+f.size+'\x00'+f.type+'\x00'+(f.type.startsWith('image/')?URL.createObjectURL(f):'');
let dc = 0;
container.addEventListener('dragenter', e=>{{ e.preventDefault(); dc++; if(dc===1) dioxus.send('drag'); }});
container.addEventListener('dragleave', ()=>{{ dc--; if(dc<=0){{ dc=0; dioxus.send('leave'); }} }});
container.addEventListener('dragover', e=>e.preventDefault());
container.addEventListener('drop', e=>{{ e.preventDefault(); dc=0; dioxus.send('leave'); const files=e.dataTransfer?.files; if(!files) return; const list=Array.from(files).slice(0,{multiple_js}); for(const f of list) dioxus.send('file\x00'+getInfo(f)); }});
input.addEventListener('change', ()=>{{ const files=input.files; if(!files) return; const list=Array.from(files).slice(0,{multiple_js}); for(const f of list) dioxus.send('file\x00'+getInfo(f)); input.value=''; }});
try {{ await dioxus.recv(); }} catch {{}}
"#,
                    multiple_js = if multiple { "files.length" } else { "1" },
                );
                let mut ev = eval(&js);
                loop {
                    match ev.recv::<String>().await {
                        Ok(msg) => {
                            if msg == "drag" {
                                is_dragging.set(true);
                            } else if msg == "leave" {
                                is_dragging.set(false);
                            } else if let Some(rest) = msg.strip_prefix("file\x00") {
                                let parts: Vec<&str> = rest.splitn(4, '\x00').collect();
                                if parts.len() == 4 {
                                    let info = FileInfo {
                                        name: parts[0].to_string(),
                                        size: parts[1].parse().unwrap_or(0),
                                        mime_type: parts[2].to_string(),
                                        preview_url: if parts[3].is_empty() {
                                            None
                                        } else {
                                            Some(parts[3].to_string())
                                        },
                                    };
                                    handle_file.call(info);
                                }
                            }
                        }
                        Err(_) => break,
                    }
                }
            }
        }
    });

    let is_drag = *is_dragging.read();
    let current_error = error.read();

    rsx! {
        div {
            class: cn(["flex flex-col gap-1.5", props.class.as_deref().unwrap_or_default()]),

            div { class: "flex flex-wrap gap-3",

                // Display existing images with remove buttons.
                for (index, src) in props.images.iter().enumerate() {
                    div {
                        key: "{index}",
                        class: "relative group",
                        ImageZoom {
                            src: src.clone(),
                            alt: format!("Image {}", index + 1),
                            class: "size-16 object-cover rounded",
                        }
                        button {
                            r#type: "button",
                            class: button_variants(ButtonVariantType::Destructive, ButtonSizeType::IconSm, Some("absolute -top-1.5 -right-1.5 size-5 bg-destructive hover:bg-destructive text-white rounded-full")),
                            onclick: move |_| on_remove.call(index),
                            TrashIcon { class: "size-2.5" }
                        }
                    }
                }

                // Drop-zone / add-image button.
                button {
                    id: container_id.clone(),
                    r#type: "button",
                    "aria-label": "Add image",
                    class: cn([
                        "group relative size-16 shrink-0 cursor-pointer overflow-hidden rounded border border-dashed border-border transition-all duration-200",
                        if is_drag { "border-ring-active bg-muted/40" } else { "hover:border-ring-active hover:bg-muted/20" },
                        if current_error.is_some() { "border-destructive" } else { "" },
                    ]),
                    onclick: move |_| trigger_input.call(()),

                    span {
                        class: cn(["flex size-full items-center justify-center", if is_drag { "opacity-30" } else { "" }]),
                        ImagePlusIcon { class: "size-5 text-primary transition-colors duration-200 group-hover:text-primary/70" }
                    }
                }

                // Hidden file input.
                input {
                    id: input_id.clone(),
                    r#type: "file",
                    class: "sr-only",
                    "aria-label": "Image upload",
                    accept: IMAGE_EXTENSIONS.join(","),
                    multiple: props.multiple,
                }
            }

            if let Some(ref msg) = *current_error {
                p { class: "text-xs text-destructive", "{msg}" }
            }
        }
    }
}
