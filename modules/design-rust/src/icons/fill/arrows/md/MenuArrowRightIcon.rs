use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MenuArrowRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MenuArrowRightIcon(props: MenuArrowRightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "3",
                y: "4",
                width: "15",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "3",
                y: "26",
                width: "15",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "23 8.586 21.586 10 26.586 15 3 15 3 17 26.586 17 21.586 22 23 23.414 30.414 16 23 8.586",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
