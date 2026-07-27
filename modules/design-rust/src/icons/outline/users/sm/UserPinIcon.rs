use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UserPinIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UserPinIcon(props: UserPinIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "11",
                cy: "6",
                r: "4",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m12.037,13.075c-.34-.044-.685-.075-1.037-.075-4.418,0-8,3.582-8,8,3.183.796,6.367,1.106,9.55.952",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m19,22.75c2.328-1.656,4-3.541,4-5.75s-1.791-4-4-4c-2.209,0-4,1.791-4,4s1.672,4.094,4,5.75Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            circle {
                cx: "19",
                cy: "17",
                r: "1",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
                "data-cap": "butt",
            }
        }
    }
}
