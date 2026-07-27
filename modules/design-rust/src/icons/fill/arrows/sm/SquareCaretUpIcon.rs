use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareCaretUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareCaretUpIcon(props: SquareCaretUpIconProps) -> Element {
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
                d: "M2 19C2 20.6569 3.34315 22 5 22L19 22C20.6569 22 22 20.6569 22 19L22 5C22 3.34315 20.6569 2 19 2L5 2C3.34315 2 2 3.34315 2 5L2 19ZM17 14.5L7 14.5L12 7L17 14.5Z",
                fill: "currentColor",
            }
        }
    }
}
