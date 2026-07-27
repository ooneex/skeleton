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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "12",
                y: "3",
                width: "10",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "12",
                y: "19",
                width: "10",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "22 11 5.414 11 9.414 7 8 5.586 1.586 12 8 18.414 9.414 17 5.414 13 22 13 22 11",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
