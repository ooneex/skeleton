use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleCaretRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleCaretRightIcon(props: CircleCaretRightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 12C23 5.92486 18.0751 0.999997 12 1C5.92487 1 0.999999 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM17 12L9.5 17L9.5 7L17 12Z",
                fill: "currentColor",
            }
        }
    }
}
