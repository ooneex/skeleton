use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PriorityHighestIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PriorityHighestIcon(props: PriorityHighestIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21.8995 13.4141L13.4142 21.8994C12.6332 22.6804 11.3668 22.6804 10.5858 21.8994L2.10051 13.4141C1.31946 12.633 1.31946 11.3667 2.10051 10.5857L10.5858 2.10038C11.3668 1.31934 12.6332 1.31934 13.4142 2.10038L21.8995 10.5857C22.6805 11.3667 22.6805 12.633 21.8995 13.4141Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9 10L12 7L15 10",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9 15L12 12L15 15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
