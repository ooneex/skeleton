use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CoffeeBeansIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CoffeeBeansIcon(props: CoffeeBeansIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11.5 2C14 6 14.1142 8.6173 12 12C9.88583 15.3827 10 18 12.5 22",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M4 12C4 17.5228 7.58172 22 12 22C16.4183 22 20 17.5228 20 12C20 6.47715 16.4183 2 12 2C7.58172 2 4 6.47715 4 12Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
