use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PriorityHighIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PriorityHighIcon(props: PriorityHighIconProps) -> Element {
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
                d: "M9.87862 2.20705C11.0502 1.03548 12.9497 1.03548 14.1213 2.20705L21.7928 9.87862C22.9644 11.0502 22.9644 12.9497 21.7928 14.1213L14.1213 21.7928C12.9497 22.9644 11.0502 22.9644 9.87862 21.7928L2.20705 14.1213C1.03548 12.9497 1.03548 11.0502 2.20705 9.87862L9.87862 2.20705ZM12 5.58579L6.58579 11L8 12.4142L12 8.41421L16 12.4142L17.4142 11L12 5.58579Z",
                fill: "currentColor",
            }
        }
    }
}
