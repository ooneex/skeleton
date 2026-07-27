use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Menu3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Menu3Icon(props: Menu3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "1",
                y: "11",
                width: "22",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "11",
                y: "4",
                width: "12",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "1",
                y: "18",
                width: "12",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
