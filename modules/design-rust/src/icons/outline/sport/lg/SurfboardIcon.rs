use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SurfboardIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SurfboardIcon(props: SurfboardIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25.8511 35.5839L23.5 24.5L12.4161 22.1489",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M9.10051 26.8787L19 29L21.1213 38.8995",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14.182 33.818L11 37L11.7071 36.2929",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M27.7721 20.2279L40.5 7.5L39.7929 8.20711",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M40.5 7.5C32.7471 4.79542 18.284 10.605 4.96598 33.2987C6.72439 35.0571 8.86012 36.2193 11.294 36.706C11.7807 39.1399 12.9429 41.2756 14.7013 43.034C37.395 29.716 43.2046 15.2529 40.5 7.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
