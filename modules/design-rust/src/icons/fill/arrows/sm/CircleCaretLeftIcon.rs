use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleCaretLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleCaretLeftIcon(props: CircleCaretLeftIconProps) -> Element {
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
                d: "M0.999998 12C0.999999 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 0.999999 0.999998 5.92487 0.999998 12ZM7 12L14.5 7L14.5 17L7 12Z",
                fill: "currentColor",
            }
        }
    }
}
