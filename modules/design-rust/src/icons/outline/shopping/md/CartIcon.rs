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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "6.5",
                cy: "27.5",
                r: "2.5",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            circle {
                cx: "25.5",
                cy: "27.5",
                r: "2.5",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m28,21H6.121c-1.258,0-1.957-1.455-1.171-2.437l2.05-2.563-1.816-12.712c-.106-.739-.738-1.288-1.485-1.288h-1.699",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m5.571,6h22.429l-2.359,7.862c-.381,1.269-1.549,2.138-2.873,2.138H7",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-cap": "butt",
            }
        }
    }
}
