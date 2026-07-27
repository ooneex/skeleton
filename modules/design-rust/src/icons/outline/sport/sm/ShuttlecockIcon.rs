use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShuttlecockIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShuttlecockIcon(props: ShuttlecockIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13.9706 5.65685L8.78143 12.9216",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M18.2132 9.8995L11 15.0518",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M6.5 10.5L13.5 17.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M8.63388 19.6067L22 14L22 10.5L18 10L17.5 6.50002L14 6.00002L13.5 2.00002L10 2.00002L4.39186 15.3758",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M4.06066 14.9896L9.01041 19.9394L7.94975 21C6.58291 22.3669 4.36683 22.3669 3 21C1.63316 19.6332 1.63316 17.4171 3 16.0503L4.06066 14.9896Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
