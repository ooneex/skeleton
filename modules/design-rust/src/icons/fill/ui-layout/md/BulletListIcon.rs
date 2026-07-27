use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BulletListIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BulletListIcon(props: BulletListIconProps) -> Element {
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
                y: "6",
                width: "16",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "14",
                y: "13",
                width: "16",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "6",
                cy: "7",
                r: "4",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "6",
                cy: "21",
                r: "4",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "14",
                y: "20",
                width: "16",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "14",
                y: "27",
                width: "16",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
