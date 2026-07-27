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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21.8995 10.5858L13.4142 2.10051C12.6332 1.31946 11.3668 1.31946 10.5858 2.10051L2.10051 10.5858C1.31946 11.3668 1.31946 12.6332 2.10051 13.4142L10.5858 21.8995C11.3668 22.6805 12.6332 22.6805 13.4142 21.8995L21.8995 13.4142C22.6805 12.6332 22.6805 11.3668 21.8995 10.5858Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9 10L15 10",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9 14L15 14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
