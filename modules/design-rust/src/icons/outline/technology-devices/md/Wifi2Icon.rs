use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Wifi2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Wifi2Icon(props: Wifi2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9 25C22.3636 20.5 9.63636 11.5 23 7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M22 7H10C5.02944 7 1 11.0294 1 16C1 20.9706 5.02944 25 10 25H22C26.9706 25 31 20.9706 31 16C31 11.0294 26.9706 7 22 7Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
