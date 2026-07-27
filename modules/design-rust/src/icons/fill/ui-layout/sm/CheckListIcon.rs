use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CheckListIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CheckListIcon(props: CheckListIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "8.989 21.549 2.592 13.872 4.128 12.592 9.011 18.451 20.892 4.59 22.41 5.892 8.989 21.549",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "3",
                width: "13",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2",
                y: "8",
                width: "8",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
