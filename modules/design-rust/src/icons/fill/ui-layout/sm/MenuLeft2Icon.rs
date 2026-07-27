use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MenuLeft2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MenuLeft2Icon(props: MenuLeft2IconProps) -> Element {
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
                width: "13",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "1",
                y: "4",
                width: "22",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "1",
                y: "18",
                width: "22",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
