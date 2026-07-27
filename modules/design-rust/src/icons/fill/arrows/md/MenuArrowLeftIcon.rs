use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MenuArrowLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MenuArrowLeftIcon(props: MenuArrowLeftIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "14",
                y: "26",
                width: "15",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "14",
                y: "4",
                width: "15",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "10.414 10 9 8.586 1.586 16 9 23.414 10.414 22 5.414 17 29 17 29 15 5.414 15 10.414 10",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
