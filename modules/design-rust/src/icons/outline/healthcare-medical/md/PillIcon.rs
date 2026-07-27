use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PillIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PillIcon(props: PillIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8.92894 11.7574L20.2427 23.0711C21.0237 23.8521 22.29 23.8521 23.0711 23.0711C23.8521 22.29 23.8521 21.0237 23.0711 20.2426L11.7574 8.92894C10.9763 8.14789 9.70998 8.14789 8.92894 8.92894C8.14789 9.70998 8.14789 10.9763 8.92894 11.7574Z",
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
