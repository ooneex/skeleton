use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CloudSyncIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CloudSyncIcon(props: CloudSyncIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9 19H5C2.8 19 1 17.2 1 15C1 13.1 2.3 11.5 4 11.1C4.2 7.2 7.5 4 11.5 4C14.7856 4 17.5314 6.09155 18.5737 9",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M23 12.5V16H19.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M13 21.5V18H16.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21.854 16H22.242C21.788 13.996 19.996 12.5 17.854 12.5C16.5214 12.5 15.324 13.0794 14.5 14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14.146 18H13.758C14.212 20.004 16.004 21.5 18.146 21.5C19.4786 21.5 20.676 20.9206 21.5 20",
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
