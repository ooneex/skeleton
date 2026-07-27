use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChartIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChartIcon(props: ChartIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10 2H14V22H10V2Z",
                fill: "currentColor",
            }
            path {
                d: "M18 8H22V22H18V8Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M2 14H6V22H2V14Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
