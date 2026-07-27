use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CampingLanternIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CampingLanternIcon(props: CampingLanternIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 6V6C12 3.79086 13.7909 2 16 2V2C18.2091 2 20 3.79086 20 6V6",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 26V22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M20 26V22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 6V19C8 20.6569 9.34315 22 11 22H21C22.6569 22 24 20.6569 24 19V6",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6 6H26",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9 30V29C9 27.3431 10.3431 26 12 26H20C21.6569 26 23 27.3431 23 29V30H9Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13 15.0199C13 14.5393 13.375 12.4207 13.375 12.4207L14.2188 12.878L16 10.5C16 10.5 19 12.878 19 15.0199C19 16.9199 17.4624 18 16 18C14.5376 18 13 16.9199 13 15.0199Z",
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
