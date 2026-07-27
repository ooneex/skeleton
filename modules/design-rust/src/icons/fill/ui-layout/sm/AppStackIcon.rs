use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AppStackIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AppStackIcon(props: AppStackIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "6 20 1 20 1 4 6 4 6 6 3 6 3 18 6 18 6 20",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            polygon {
                points: "23 20 18 20 18 18 21 18 21 6 18 6 18 4 23 4 23 20",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "5",
                y: "2",
                width: "14",
                height: "20",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
