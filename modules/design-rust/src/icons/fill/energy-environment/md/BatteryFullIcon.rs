use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BatteryFullIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BatteryFullIcon(props: BatteryFullIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "32 20 28 20 28 18 30 18 30 14 28 14 28 12 32 12 32 20",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "1",
                y: "5",
                width: "29",
                height: "22",
                rx: "4",
                ry: "4",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
