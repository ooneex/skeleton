use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TagsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TagsIcon(props: TagsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 24C18.2091 24 20 22.2091 20 20C20 17.7909 18.2091 16 16 16C13.7909 16 12 17.7909 12 20C12 22.2091 13.7909 24 16 24Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M39.4546 26.4645L21.8955 8.95441L4.99389 9.02337L4.92493 25.925L22.4645 43.4645C24.4171 45.4171 27.5829 45.4171 29.5355 43.4645L39.4595 33.5405C41.4141 31.586 41.4118 28.4164 39.4546 26.4645Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8.98779 4L9.00003 1.99999L25.9016 1.93103L43.4412 19.4705C44.8022 20.8315 45.2146 22.7819 44.6783 24.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
