use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CartIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CartIcon(props: CartIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "6",
                cy: "21",
                r: "1",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            circle {
                cx: "20",
                cy: "21",
                r: "1",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            circle {
                cx: "6",
                cy: "21",
                r: "1",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            circle {
                cx: "20",
                cy: "21",
                r: "1",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m4.821,6h17.179l-1.678,8.392c-.187.935-1.008,1.608-1.961,1.608H7.735c-.995,0-1.839-.732-1.98-1.717l-1.755-12.283H1",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
