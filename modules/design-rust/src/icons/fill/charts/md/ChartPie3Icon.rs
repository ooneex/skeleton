use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChartPie3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChartPie3Icon(props: ChartPie3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15 4C7.8203 4 2 9.8203 2 17C2 24.1797 7.8203 30 15 30C22.1797 30 28 24.1797 28 17H15V4Z",
                fill: "currentColor",
            }
            path {
                d: "M17 15H30C30 7.8203 24.1797 2 17 2L17 15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
