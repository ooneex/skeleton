use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareActivityChartIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareActivityChartIcon(props: SquareActivityChartIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m8.42,15l4.708-8.24,6,14,3.292-5.76h7.58V6c0-2.206-1.794-4-4-4H6c-2.206,0-4,1.794-4,4v9h6.42Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m23.58,17l-4.708,8.24-6-14-3.292,5.76H2v9c0,2.206,1.794,4,4,4h20c2.206,0,4-1.794,4-4v-9h-6.42Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
