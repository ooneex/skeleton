use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GridCheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GridCheckIcon(props: GridCheckIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "2",
                y: "2",
                width: "12",
                height: "12",
                rx: "2.5",
                ry: "2.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "18",
                width: "12",
                height: "12",
                rx: "2.5",
                ry: "2.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "18",
                y: "18",
                width: "12",
                height: "12",
                rx: "2.5",
                ry: "2.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "21.965 12.996 17.59 7.892 19.108 6.59 22.035 10.004 29.957 1.586 31.413 2.957 21.965 12.996",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
