use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MenuBarsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MenuBarsIcon(props: MenuBarsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "25",
                y: "5",
                width: "5",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2",
                y: "5",
                width: "20",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "15",
                width: "5",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "10",
                y: "15",
                width: "20",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "25",
                y: "25",
                width: "5",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2",
                y: "25",
                width: "20",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
