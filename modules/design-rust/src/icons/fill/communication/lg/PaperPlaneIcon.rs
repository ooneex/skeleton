use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PaperPlaneIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PaperPlaneIcon(props: PaperPlaneIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M43.2402 4.54089L37.1054 43.7711L24.221 34.402L14.5 42.061V27.8158L32 14L11.777 25.3533L1.83057 18.1206L43.2402 4.54089Z",
                fill: "currentColor",
            }
        }
    }
}
