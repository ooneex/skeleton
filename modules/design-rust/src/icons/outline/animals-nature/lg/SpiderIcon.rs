use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SpiderIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SpiderIcon(props: SpiderIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M18.996 32.2839C18.6775 33.0632 18.5 33.9298 18.5 34.8427C18.5 38.2433 20.9624 40 24 40C27.0376 40 29.5 38.2433 29.5 34.8427C29.5 33.9298 29.3225 33.0632 29.004 32.2839",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M35.9999 5V9.00012L32 13L32.3623 12.6377",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12.0001 5.00009L12.0001 9.00006L15.9753 12.9753L15.5 12.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M31.5 30.5L38 39.0001L32 46.0001",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16.5 30.5L10 39.0001L16 46.0001",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M44.25 12.75L42 18L35 19L35.587 18.9161",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M3.75 12.75L5.99999 17.9999L13 19.0604L12 18.9089",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M44.25 32.2501L42 27.0001L35 25L36 25.2857",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M3.75 32.2501L6 27.0001L13 25L12.5 25.1429",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 2V9",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 9C30.0751 9 35 14.1989 35 21.0001C35 27.8012 30.0751 33.3146 24 33.3146C17.9249 33.3146 13 27.8011 13 21C13 14.1989 17.9249 9 24 9Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 16L27.5355 22.5L24 26L20.4645 22.5L24 16Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                fill: "none",
                "data-cap": "butt",
            }
        }
    }
}
