use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct ImageZoomProps {
    pub src: String,
    pub alt: String,
    #[props(default)]
    pub class: Option<String>,
}

/// Image with zoom wrapper. The interactive zoom-on-click behaviour from
/// `react-medium-image-zoom` is not reproduced here; the image is displayed
/// at its natural size inside a centered flex container. Add a click handler
/// via `onclick` on the image element if zoom behaviour is required.
#[component]
pub fn ImageZoom(props: ImageZoomProps) -> Element {
    rsx! {
        div { class: "flex items-center justify-center w-full h-full",
            img {
                src: props.src,
                alt: props.alt,
                class: cn([
                    "max-w-full max-h-full rounded object-contain",
                    props.class.as_deref().unwrap_or_default(),
                ]),
            }
        }
    }
}
