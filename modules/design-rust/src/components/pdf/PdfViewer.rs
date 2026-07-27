use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct PdfViewerProps {
    pub src: String,
    #[props(default = false)]
    pub toolbar: bool,
    #[props(default = 0)]
    pub initial_page: u32,
    #[props(default)]
    pub page: Option<u32>,
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub on_text_select: Option<EventHandler<(String, u32)>>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// Displays a PDF document.
///
/// # Limitations
/// The original TypeScript component uses `@react-pdf-viewer/core` and
/// `@react-pdf-viewer/toolbar` for in-page PDF rendering with a custom
/// toolbar. There is no equivalent Rust/Dioxus library available in this
/// codebase, so this port renders the PDF with an `<iframe>` and relies on
/// the browser's built-in PDF viewer instead. The `toolbar`,
/// `initial_page`, `page`, and `on_text_select` props are kept for API
/// compatibility, but only `toolbar` affects the surrounding markup.
#[component]
pub fn PdfViewer(props: PdfViewerProps) -> Element {
    rsx! {
        div {
            class: cn([
                "h-full w-full relative bg-light rounded",
                if props.toolbar { "pt-14" } else { "pt-0" },
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            if props.toolbar {
                div { class: "justify-center w-fit m-auto rounded-md absolute top-2 left-0 right-0 z-50 hidden md:flex",
                    div { class: "pdf-toolbar flex items-center gap-1 px-2 py-1.5 w-fit rounded-md bg-transparent" }
                }
            }
            iframe {
                src: props.src,
                class: "w-full h-full border-0",
                title: "PDF document",
                "allowfullscreen": true,
            }
        }
    }
}
