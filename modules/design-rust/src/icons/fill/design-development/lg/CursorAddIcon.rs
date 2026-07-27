use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CursorAddIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CursorAddIcon(props: CursorAddIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 32C20 25.3726 25.3726 20 32 20C38.6274 20 44 25.3726 44 32C44 38.6274 38.6274 44 32 44C25.3726 44 20 38.6274 20 32ZM25 30.5H30.5L30.5 25H33.5L33.5 30.5H39V33.5H33.5V39H30.5V33.5H25V30.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11.7344 29.1519L17.7405 17.7402L29.1521 11.7341L4.52702 4.52673L11.7344 29.1519Z",
                fill: "currentColor",
            }
        }
    }
}
