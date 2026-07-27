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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "10",
                y: "5",
                width: "13",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "10",
                y: "10",
                width: "13",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "4.5",
                cy: "5.5",
                r: "3.5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "4.5",
                cy: "15.5",
                r: "3.5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "10",
                y: "15",
                width: "13",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "10",
                y: "20",
                width: "13",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
