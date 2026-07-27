use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UserMinus2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UserMinus2Icon(props: UserMinus2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "16",
                y: "10",
                width: "8",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "10",
                cy: "5.5",
                r: "4.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m10,12c-4.962,0-9,4.038-9,9v.781l.757.189c2.735.684,5.489,1.025,8.243,1.025s5.508-.342,8.243-1.025l.757-.189v-.781c0-4.962-4.038-9-9-9Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
