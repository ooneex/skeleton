use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PriorityNormalIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PriorityNormalIcon(props: PriorityNormalIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17 20L31 20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M17 28L31 28",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M44.5061 21.8787L26.1213 3.4939C24.9497 2.32233 23.0503 2.32233 21.8787 3.4939L3.49391 21.8787C2.32233 23.0503 2.32233 24.9497 3.49391 26.1213L21.8787 44.5061C23.0503 45.6777 24.9497 45.6777 26.1213 44.5061L44.5061 26.1213C45.6777 24.9497 45.6777 23.0503 44.5061 21.8787Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
