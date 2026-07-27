use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct IronIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn IronIcon(props: IronIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19 22V20C19 18.8954 19.8954 18 21 18H27C28.1046 18 29 18.8954 29 20V22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9.5 22H33.4314C36.691 22 39.5192 24.2499 40.2521 27.426L42 35H6L11.1554 11.9104C11.6656 9.6251 13.6936 8 16.0352 8H28.3698V9C28.3698 11.2091 26.5789 13 24.3698 13H11.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6 40L42 40",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 28.5C13 27.6716 13.6716 27 14.5 27C15.3284 27 16 27.6716 16 28.5C16 29.3284 15.3284 30 14.5 30C13.6716 30 13 29.3284 13 28.5Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14 28.5C14 28.2239 14.2239 28 14.5 28C14.7761 28 15 28.2239 15 28.5C15 28.7761 14.7761 29 14.5 29C14.2239 29 14 28.7761 14 28.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                stroke_linejoin: "round",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
