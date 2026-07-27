#![allow(non_snake_case)]

use dioxus::document::eval;
use dioxus::prelude::*;

use super::fileSize::{MaxFileSizeType, format_bytes, parse_file_size};
use crate::components::button::{ButtonSizeType, ButtonVariantType, button_variants};
use crate::components::typography::{Muted, Small};
use crate::hooks::use_id;
use crate::icons::outline::arrows::sm::CloudUploadIcon;
use crate::icons::outline::design_development::sm::FilePdfIcon;
use crate::icons::outline::ui_layout::sm::{PlusIcon, TrashIcon};
use crate::utils::cn;

// ─── File-type registry (mirrors FILE_TYPE_MAP in the TS source) ───────────

#[derive(Clone, PartialEq, Eq, Debug)]
pub enum AcceptedFileType {
    Image,
    Pdf,
    Video,
    Audio,
    Document,
    Spreadsheet,
    Archive,
}

impl AcceptedFileType {
    pub fn mime_types(&self) -> &'static [&'static str] {
        match self {
            Self::Image => &[
                "image/jpeg",
                "image/png",
                "image/gif",
                "image/webp",
                "image/svg+xml",
            ],
            Self::Pdf => &["application/pdf"],
            Self::Video => &["video/mp4", "video/webm", "video/ogg", "video/quicktime"],
            Self::Audio => &["audio/mpeg", "audio/wav", "audio/ogg", "audio/webm"],
            Self::Document => &[
                "application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "text/plain",
            ],
            Self::Spreadsheet => &[
                "application/vnd.ms-excel",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                "text/csv",
            ],
            Self::Archive => &[
                "application/zip",
                "application/x-rar-compressed",
                "application/x-7z-compressed",
            ],
        }
    }

    pub fn extensions(&self) -> &'static [&'static str] {
        match self {
            Self::Image => &[".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"],
            Self::Pdf => &[".pdf"],
            Self::Video => &[".mp4", ".webm", ".ogg", ".mov"],
            Self::Audio => &[".mp3", ".wav", ".ogg", ".webm"],
            Self::Document => &[".doc", ".docx", ".txt"],
            Self::Spreadsheet => &[".xls", ".xlsx", ".csv"],
            Self::Archive => &[".zip", ".rar", ".7z"],
        }
    }

    pub fn label(&self) -> &'static str {
        match self {
            Self::Image => "Images",
            Self::Pdf => "PDF",
            Self::Video => "Videos",
            Self::Audio => "Audio",
            Self::Document => "Documents",
            Self::Spreadsheet => "Spreadsheets",
            Self::Archive => "Archives",
        }
    }
}

// ─── Shared data types ──────────────────────────────────────────────────────

#[derive(Clone, PartialEq, Debug)]
pub struct FileErrorType {
    pub message: String,
    pub code: String,
}

/// Metadata extracted from a browser `File` object.
#[derive(Clone, PartialEq, Debug)]
pub struct FileInfo {
    pub name: String,
    /// File size in bytes.
    pub size: u64,
    pub mime_type: String,
    /// Object URL for image files; `None` for non-images.
    pub preview_url: Option<String>,
}

// ─── Upload-status state machine ───────────────────────────────────────────

#[derive(Clone, Copy, PartialEq, Eq, Debug, Default)]
pub enum FileStatusType {
    #[default]
    Idle,
    Dragging,
    Uploading,
    Completed,
    Error,
}

// ─── Uploading animation (SVG progress ring, matches TSX exactly) ───────────

#[component]
fn UploadingAnimation(progress: f64, mask_id: String) -> Element {
    let stroke_dasharray = format!("{:.2}, 754", (progress / 100.0) * 754.0);
    let mask_ref = format!("url(#{})", mask_id);
    let css = r"
        @keyframes rotate-cw { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes rotate-ccw { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        .g-spin circle { transform-origin: 120px 120px; }
        .g-spin circle:nth-child(1)  { animation: rotate-cw 8s linear infinite; }
        .g-spin circle:nth-child(2)  { animation: rotate-ccw 8s linear infinite; }
        .g-spin circle:nth-child(3)  { animation: rotate-cw 8s linear infinite; }
        .g-spin circle:nth-child(4)  { animation: rotate-ccw 8s linear infinite; }
        .g-spin circle:nth-child(5)  { animation: rotate-cw 8s linear infinite; }
        .g-spin circle:nth-child(6)  { animation: rotate-ccw 8s linear infinite; }
        .g-spin circle:nth-child(7)  { animation: rotate-cw 8s linear infinite; }
        .g-spin circle:nth-child(8)  { animation: rotate-ccw 8s linear infinite; }
        .g-spin circle:nth-child(9)  { animation: rotate-cw 8s linear infinite; }
        .g-spin circle:nth-child(10) { animation: rotate-ccw 8s linear infinite; }
        .g-spin circle:nth-child(11) { animation: rotate-cw 8s linear infinite; }
        .g-spin circle:nth-child(12) { animation: rotate-ccw 8s linear infinite; }
        .g-spin circle:nth-child(13) { animation: rotate-cw 8s linear infinite; }
        .g-spin circle:nth-child(14) { animation: rotate-ccw 8s linear infinite; }
        .g-spin circle:nth-child(2n)  { animation-delay: 0.2s; }
        .g-spin circle:nth-child(3n)  { animation-delay: 0.3s; }
        .g-spin circle:nth-child(5n)  { animation-delay: 0.5s; }
        .g-spin circle:nth-child(7n)  { animation-delay: 0.7s; }
    ";
    rsx! {
        div { class: "relative h-16 w-16",
            svg {
                "aria-label": format!("Upload progress: {}%", progress.round()),
                class: "h-full w-full",
                fill: "none",
                view_box: "0 0 240 240",
                xmlns: "http://www.w3.org/2000/svg",
                title { "Upload Progress Indicator" }
                defs {
                    mask { id: mask_id,
                        rect { fill: "black", height: "240", width: "240" }
                        circle {
                            cx: "120",
                            cy: "120",
                            fill: "white",
                            r: "120",
                            "stroke-dasharray": stroke_dasharray,
                            transform: "rotate(-90 120 120)",
                        }
                    }
                }
                style { "{css}" }
                g {
                    class: "g-spin",
                    mask: mask_ref,
                    "stroke-dasharray": "18% 40%",
                    "stroke-width": "10",
                    circle { cx: "120", cy: "120", opacity: "0.95", r: "150", stroke: "#FF2E7E" }
                    circle { cx: "120", cy: "120", opacity: "0.95", r: "140", stroke: "#FFD600" }
                    circle { cx: "120", cy: "120", opacity: "0.95", r: "130", stroke: "#00E5FF" }
                    circle { cx: "120", cy: "120", opacity: "0.95", r: "120", stroke: "#FF3D71" }
                    circle { cx: "120", cy: "120", opacity: "0.95", r: "110", stroke: "#4ADE80" }
                    circle { cx: "120", cy: "120", opacity: "0.95", r: "100", stroke: "#2196F3" }
                    circle { cx: "120", cy: "120", opacity: "0.95", r: "90", stroke: "#FFA726" }
                    circle { cx: "120", cy: "120", opacity: "0.95", r: "80", stroke: "#FF1493" }
                    circle { cx: "120", cy: "120", opacity: "0.95", r: "70", stroke: "#FFEB3B" }
                    circle { cx: "120", cy: "120", opacity: "0.95", r: "60", stroke: "#00BCD4" }
                    circle { cx: "120", cy: "120", opacity: "0.95", r: "50", stroke: "#FF4081" }
                    circle { cx: "120", cy: "120", opacity: "0.95", r: "40", stroke: "#76FF03" }
                    circle { cx: "120", cy: "120", opacity: "0.95", r: "30", stroke: "#448AFF" }
                    circle { cx: "120", cy: "120", opacity: "0.95", r: "20", stroke: "#FF3D00" }
                }
            }
        }
    }
}

// ─── Props ──────────────────────────────────────────────────────────────────

const UPLOAD_STEP_SIZE: u64 = 5; // progress increments per timer tick (matches TS)

#[derive(Props, Clone, PartialEq)]
pub struct FileUploadProps {
    /// Called when the simulated upload animation completes.
    pub on_upload_success: Option<EventHandler<FileInfo>>,
    /// Called when file validation fails.
    pub on_upload_error: Option<EventHandler<FileErrorType>>,
    /// Restrict accepted file types (image / pdf / video / audio / document / spreadsheet / archive).
    #[props(default)]
    pub accepted_file_types: Vec<AcceptedFileType>,
    /// Raw HTML `accept` attribute override (e.g. `".pdf,.doc"`).
    #[props(default)]
    pub accept: Option<String>,
    /// Maximum allowed file size. Defaults to `"5MB"`.
    #[props(default = MaxFileSizeType::Text("5MB".into()))]
    pub max_file_size: MaxFileSizeType,
    /// Pre-populated file to display on first render.
    #[props(default)]
    pub current_file: Option<FileInfo>,
    /// Called when the file list is cleared.
    pub on_file_remove: Option<EventHandler<()>>,
    /// Total upload animation duration in ms. Set to `0` to skip animation. Defaults to `2000`.
    #[props(default = 2000_u64)]
    pub upload_delay: u64,
    /// Optional extra validator; return `Some(FileErrorType)` to reject the file.
    #[props(default)]
    pub validate_file: Option<Callback<FileInfo, Option<FileErrorType>>>,
    /// Height Tailwind class for the drop area. Defaults to `"h-60"`.
    #[props(default = "h-60".into())]
    pub height: String,
    /// Allow selecting / dropping multiple files. Defaults to `false`.
    #[props(default = false)]
    pub multiple: bool,
    #[props(default)]
    pub class: Option<String>,
}

// ─── Component ──────────────────────────────────────────────────────────────

#[component]
pub fn FileUpload(props: FileUploadProps) -> Element {
    // Stable DOM IDs for the eval bridge.
    let container_id = use_id("file-upload-container");
    let input_id = use_id("file-upload-input");
    let mask_id = use_id("progress-mask");

    // ── State ────────────────────────────────────────────────────────────────
    let initial_files: Vec<FileInfo> = props.current_file.clone().into_iter().collect();
    let mut files = use_signal(|| initial_files);
    let mut status = use_signal(|| {
        if props.current_file.is_some() {
            FileStatusType::Completed
        } else {
            FileStatusType::Idle
        }
    });
    let mut progress = use_signal(|| 0.0_f64);
    let mut error: Signal<Option<FileErrorType>> = use_signal(|| None);
    let mut uploading_file: Signal<Option<FileInfo>> = use_signal(|| None);
    // Incrementing this cancels any in-progress upload simulation (tooltip pattern).
    let mut upload_gen = use_signal(|| 0_u64);

    // ── Prop signals (kept in sync so closures don't go stale) ───────────────
    let mut max_size_bytes = use_signal(|| parse_file_size(&props.max_file_size));
    let mut accepted_types = use_signal(|| props.accepted_file_types.clone());
    let mut upload_delay_ms = use_signal(|| props.upload_delay);
    let mut multiple_sig = use_signal(|| props.multiple);

    let (p_max, p_types, p_delay, p_mult) = (
        parse_file_size(&props.max_file_size),
        props.accepted_file_types.clone(),
        props.upload_delay,
        props.multiple,
    );
    use_effect(use_reactive!(|(p_max, p_types, p_delay, p_mult)| {
        max_size_bytes.set(p_max);
        accepted_types.set(p_types);
        upload_delay_ms.set(p_delay);
        multiple_sig.set(p_mult);
    }));

    // ── Callbacks ────────────────────────────────────────────────────────────

    let on_upload_success = props.on_upload_success;
    let on_upload_error = props.on_upload_error;
    let on_file_remove = props.on_file_remove;
    let validate_file = props.validate_file.clone();

    // Revoke a single object URL.
    let revoke_url = |url: &str| {
        let url = url.replace('\'', "\\'");
        eval(&format!("try{{URL.revokeObjectURL('{url}')}}catch{{}}"));
    };

    // Show an error for 3 s then auto-clear.
    let show_error = use_callback(move |err: FileErrorType| {
        error.set(Some(err.clone()));
        status.set(FileStatusType::Error);
        if let Some(cb) = on_upload_error {
            cb.call(err.clone());
        }
        spawn(async move {
            let mut ev = eval("await new Promise(r=>setTimeout(r,3000));dioxus.send(true);");
            if ev.recv::<bool>().await.is_ok() {
                error.set(None);
                status.set(FileStatusType::Idle);
            }
        });
    });

    // Validate & kick off the upload simulation for a single FileInfo.
    let handle_file_select = use_callback(move |info: FileInfo| {
        error.set(None);

        // Size check.
        if info.size > *max_size_bytes.peek() {
            show_error.call(FileErrorType {
                message: format!("File size exceeds {}", format_bytes(*max_size_bytes.peek())),
                code: "FILE_TOO_LARGE".into(),
            });
            return;
        }

        // Type check.
        let types = accepted_types.peek();
        if !types.is_empty() {
            let mime = info.mime_type.to_lowercase();
            let name = info.name.to_lowercase();
            let valid = types.iter().any(|t| {
                t.mime_types().iter().any(|m| mime == *m)
                    || t.extensions().iter().any(|e| name.ends_with(e))
            });
            if !valid {
                let labels = types
                    .iter()
                    .map(|t| t.label())
                    .collect::<Vec<_>>()
                    .join(", ");
                show_error.call(FileErrorType {
                    message: format!("File type must be {labels}"),
                    code: "INVALID_FILE_TYPE".into(),
                });
                return;
            }
        }
        drop(types);

        // Custom validator.
        if let Some(ref validate) = validate_file {
            if let Some(err) = validate.call(info.clone()) {
                show_error.call(err);
                return;
            }
        }

        let delay = *upload_delay_ms.peek();

        if delay == 0 {
            // Skip animation — add immediately.
            if *multiple_sig.peek() {
                files.with_mut(|f| f.push(info.clone()));
            } else {
                files.set(vec![info.clone()]);
            }
            status.set(FileStatusType::Completed);
            progress.set(100.0);
            if let Some(cb) = on_upload_success {
                cb.call(info);
            }
            return;
        }

        // Start simulated upload.
        status.set(FileStatusType::Uploading);
        progress.set(0.0);
        uploading_file.set(Some(info.clone()));

        let gen_val = *upload_gen.peek() + 1;
        upload_gen.set(gen_val);

        let step_interval = delay / (100 / UPLOAD_STEP_SIZE);
        spawn(async move {
            let mut ev = eval(&format!(
                r#"const s={step_interval};for(let i=5;i<=100;i+=5){{await new Promise(r=>setTimeout(r,s));dioxus.send(i);}};"#
            ));
            loop {
                match ev.recv::<f64>().await {
                    Ok(p) => {
                        // Cancelled by resetState or another file selection?
                        if *upload_gen.peek() != gen_val {
                            break;
                        }
                        if *status.peek() != FileStatusType::Uploading {
                            break;
                        }
                        progress.set(p);
                        if p >= 100.0 {
                            if *multiple_sig.peek() {
                                files.with_mut(|f| f.push(info.clone()));
                            } else {
                                files.set(vec![info.clone()]);
                            }
                            status.set(FileStatusType::Completed);
                            uploading_file.set(None);
                            if let Some(cb) = on_upload_success {
                                cb.call(info.clone());
                            }
                            break;
                        }
                    }
                    Err(_) => break,
                }
            }
        });
    });

    // Remove a file at index and revoke its object URL.
    let remove_file = use_callback(move |index: usize| {
        {
            let f = files.peek();
            if let Some(info) = f.get(index) {
                if let Some(ref url) = info.preview_url {
                    revoke_url(url);
                }
            }
        }
        files.with_mut(|f| {
            f.remove(index);
        });
        if files.peek().is_empty() {
            status.set(FileStatusType::Idle);
        }
        if let Some(cb) = on_file_remove {
            cb.call(());
        }
    });

    // Cancel upload or clear all files.
    let reset_state = use_callback(move |()| {
        // Invalidate running upload simulation.
        let next_gen = *upload_gen.peek() + 1;
        upload_gen.set(next_gen);
        // Revoke all preview URLs.
        for info in files.peek().iter() {
            if let Some(ref url) = info.preview_url {
                revoke_url(url);
            }
        }
        files.set(Vec::new());
        status.set(FileStatusType::Idle);
        progress.set(0.0);
        uploading_file.set(None);
        if let Some(cb) = on_file_remove {
            cb.call(());
        }
    });

    // Click-to-open the hidden file input.
    let input_id_click = input_id.clone();
    let trigger_input = use_callback(move |()| {
        if *status.peek() != FileStatusType::Uploading {
            let id = input_id_click.clone();
            eval(&format!("document.getElementById('{id}').click()"));
        }
    });

    // ── Persistent eval bridge: drag, drop, and input change ─────────────────
    // Runs once on mount, receives events for the component's lifetime.
    let _file_bridge = use_future({
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
container.addEventListener('drop', e=>{{ e.preventDefault(); dc=0; dioxus.send('leave'); const f=e.dataTransfer?.files?.[0]; if(f) dioxus.send('file\x00'+getInfo(f)); }});
input.addEventListener('change', ()=>{{ const f=input.files?.[0]; if(f){{ dioxus.send('file\x00'+getInfo(f)); input.value=''; }} }});
try {{ await dioxus.recv(); }} catch {{}}
"#
                );
                let mut ev = eval(&js);
                loop {
                    match ev.recv::<String>().await {
                        Ok(msg) => {
                            if msg == "drag" {
                                if *status.peek() != FileStatusType::Uploading {
                                    status.set(FileStatusType::Dragging);
                                }
                            } else if msg == "leave" {
                                if *status.peek() == FileStatusType::Dragging {
                                    status.set(FileStatusType::Idle);
                                }
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
                                    handle_file_select.call(info);
                                }
                            }
                        }
                        Err(_) => break,
                    }
                }
            }
        }
    });

    // Revoke all URLs when the component unmounts.
    use_drop(move || {
        for info in files.peek().iter() {
            if let Some(ref url) = info.preview_url {
                revoke_url(url);
            }
        }
    });

    // ── Derived values ────────────────────────────────────────────────────────

    let current_status = *status.read();
    let current_files = files.read();
    let current_error = error.read();
    let current_progress = *progress.read();
    let current_uploading = uploading_file.read();

    let accept_attr = props.accept.clone().or_else(|| {
        if !props.accepted_file_types.is_empty() {
            Some(
                props
                    .accepted_file_types
                    .iter()
                    .flat_map(|t| t.extensions())
                    .copied()
                    .collect::<Vec<_>>()
                    .join(","),
            )
        } else {
            None
        }
    });

    let accepted_labels = if !props.accepted_file_types.is_empty() {
        props
            .accepted_file_types
            .iter()
            .map(|t| t.label())
            .collect::<Vec<_>>()
            .join(", ")
    } else {
        "Any file".to_string()
    };

    let max_size_display = format_bytes(parse_file_size(&props.max_file_size));

    let is_dragging = current_status == FileStatusType::Dragging;
    let has_error = current_error.is_some();

    let container_id_attr = container_id.clone();
    let input_id_attr = input_id.clone();
    let height_class = props.height.clone();

    rsx! {
        div {
            class: cn(["relative mx-auto w-full", props.class.as_deref().unwrap_or_default()]),

            div {
                id: container_id_attr,
                class: cn([
                    "group relative w-full overflow-hidden rounded-xl bg-white border border-dashed border-border p-2 transition-all duration-200",
                    if is_dragging { "border-ring-active" } else { "hover:border-ring-active" },
                    if has_error { "border-destructive" } else { "" },
                ]),

                div {
                    class: cn([
                        "relative",
                        &height_class,
                        if is_dragging { "opacity-20" } else { "" },
                    ]),

                    // ── Idle / Dragging state ─────────────────────────────
                    if matches!(current_status, FileStatusType::Idle | FileStatusType::Dragging) {
                        button {
                            r#type: "button",
                            class: "absolute inset-0 flex flex-col items-center justify-center gap-3 cursor-pointer",
                            onclick: move |_| trigger_input.call(()),
                            span { class: "size-11 rounded bg-muted/60 group-hover:bg-muted/90 flex items-center justify-center transition-colors duration-200",
                                CloudUploadIcon { class: "size-5 text-primary" }
                            }
                            span { class: "text-center space-y-0.5",
                                span { class: "block text-sm font-medium text-foreground/60 group-hover:text-foreground/80 transition-colors duration-200",
                                    "Click to upload or drag & drop"
                                }
                                span { class: "block text-2xs text-muted-foreground",
                                    "{accepted_labels}"
                                    " — up to {max_size_display}"
                                }
                            }
                        }
                    }

                    // ── Uploading state ──────────────────────────────────
                    if current_status == FileStatusType::Uploading {
                        if let Some(ref uf) = *current_uploading {
                            div { class: "absolute inset-0 flex flex-col items-center justify-center p-6",
                                div { class: "mb-4",
                                    UploadingAnimation { progress: current_progress, mask_id: mask_id.clone() }
                                }
                                div { class: "mb-4 space-y-1.5 text-center",
                                    Small { "{uf.name}" }
                                    div { class: "flex items-center justify-center gap-2 text-xs",
                                        Muted { "{format_bytes(uf.size)}" }
                                        span { class: "font-medium text-foreground",
                                            "{current_progress.round() as i64}%"
                                        }
                                    }
                                }
                                button {
                                    r#type: "button",
                                    class: button_variants(ButtonVariantType::Secondary, ButtonSizeType::Sm, Some("w-4/5")),
                                    onclick: move |_| reset_state.call(()),
                                    "Cancel"
                                }
                            }
                        }
                    }

                    // ── Completed state ──────────────────────────────────
                    if current_status == FileStatusType::Completed && !current_files.is_empty() {
                        div { class: "absolute inset-0 flex flex-col justify-between p-2 overflow-y-auto",
                            div { class: "flex flex-col gap-2",
                                for (index, file) in current_files.iter().enumerate() {
                                    div {
                                        key: "{file.name}-{index}",
                                        class: "flex w-full items-center gap-4 rounded-lg bg-background p-3",

                                        // Preview thumbnail
                                        if let Some(ref url) = file.preview_url {
                                            img {
                                                alt: "{file.name}",
                                                class: "h-14 w-14 rounded-md object-cover",
                                                src: "{url}",
                                            }
                                        } else if file.mime_type == "application/pdf"
                                            || file.name.to_lowercase().ends_with(".pdf")
                                        {
                                            div { class: "flex h-14 w-14 items-center justify-center rounded-md bg-muted",
                                                FilePdfIcon { class: "size-8 text-muted-foreground" }
                                            }
                                        } else {
                                            div { class: "flex h-14 w-14 items-center justify-center rounded-md bg-muted",
                                                Small { class: "text-muted-foreground uppercase",
                                                    {file.name.rsplit('.').next().unwrap_or("").chars().take(4).collect::<String>()}
                                                }
                                            }
                                        }

                                        div { class: "flex flex-1 flex-col gap-1 overflow-hidden",
                                            Small { class: "truncate font-medium", "{file.name}" }
                                            div { class: "flex items-center gap-2",
                                                Muted { class: "text-xs", "{format_bytes(file.size)}" }
                                                Muted { class: "text-xs",
                                                    {if file.mime_type.is_empty() { "Unknown type" } else { file.mime_type.as_str() }}
                                                }
                                            }
                                        }

                                        button {
                                            r#type: "button",
                                            "aria-label": "Remove file",
                                            class: button_variants(ButtonVariantType::Destructive, ButtonSizeType::IconSm, None),
                                            onclick: move |_| remove_file.call(index),
                                            TrashIcon { class: "size-4" }
                                        }
                                    }
                                }
                            }

                            if props.multiple {
                                button {
                                    r#type: "button",
                                    class: button_variants(ButtonVariantType::Secondary, ButtonSizeType::Sm, Some("w-full mt-4")),
                                    onclick: move |_| trigger_input.call(()),
                                    PlusIcon {}
                                    span { "Add more files" }
                                }
                            }
                        }
                    }

                    // Hidden file input — always in the DOM so the eval bridge can reference it.
                    input {
                        id: input_id_attr,
                        r#type: "file",
                        class: "sr-only",
                        "aria-label": "File input",
                        accept: accept_attr.unwrap_or_default(),
                        multiple: props.multiple,
                    }
                }

                // ── Error toast ──────────────────────────────────────────
                if let Some(ref err) = *current_error {
                    div { class: "-translate-x-1/2 absolute bottom-4 left-1/2 transform rounded-lg border border-destructive/20 bg-destructive/10 px-4 py-2",
                        Small { class: "text-destructive", "{err.message}" }
                    }
                }
            }
        }
    }
}
