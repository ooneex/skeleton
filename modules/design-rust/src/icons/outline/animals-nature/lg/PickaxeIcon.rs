use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PickaxeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PickaxeIcon(props: PickaxeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14 29L21.5 31.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M11.0197 31.6731L12.5 40.9999",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M36.3529 15.501L36.2285 15.5952L42 11.2235L36.7765 6L32.4088 11.7661L32.5296 11.6067",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M22.5612 20.9277L3.07239 39.0725L6.00002 42.0001L8.92765 44.9277L27.0724 25.4389",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M42.935 31.9999L16 5.08536L18.087 2.99991C24.0487 5.21683 29.895 9.12645 34.3891 13.6248C38.8833 18.1231 42.7915 23.9757 45 29.9365L42.935 31.9999Z",
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
