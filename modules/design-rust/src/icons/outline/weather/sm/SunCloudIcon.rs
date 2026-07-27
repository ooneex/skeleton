use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SunCloudIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SunCloudIcon(props: SunCloudIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12 1V2",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M23 12L22 12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M2 12L1 12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M19.7782 4.2218L19.0711 4.92891",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4.92892 4.92896L4.22182 4.22185",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12.0111 14C14.9765 14 16.942 16.4691 16.942 19.0502H18.0251C19.1158 19.0502 20 19.9344 20 21.0251C20 22.1158 19.1158 23 18.0251 23H5.9749C4.88419 23 4 22.1158 4 21.0251C4 19.9344 4.88419 19.0502 5.9749 19.0502H7.05795C7.05795 16.4691 9.04564 14 12.0111 14Z",
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
