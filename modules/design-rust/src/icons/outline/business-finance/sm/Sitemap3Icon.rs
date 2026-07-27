use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Sitemap3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Sitemap3Icon(props: Sitemap3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14 18H10V22H14V18Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M22 18H18V22H22V18Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6 18H2V22H6V18Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M20 14V12H4V14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 10V14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
