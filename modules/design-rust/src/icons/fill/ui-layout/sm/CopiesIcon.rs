use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CopiesIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CopiesIcon(props: CopiesIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "4",
                y: "5",
                width: "16",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "7",
                y: "1",
                width: "10",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "1",
                y: "9",
                width: "22",
                height: "13",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
