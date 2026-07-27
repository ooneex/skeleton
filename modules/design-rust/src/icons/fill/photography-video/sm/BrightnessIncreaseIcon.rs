use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BrightnessIncreaseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BrightnessIncreaseIcon(props: BrightnessIncreaseIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "11",
                width: "2",
                height: "4",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "17.071",
                y: "3.929",
                width: "4",
                height: "2",
                transform: "translate(2.1 14.929) rotate(-45)",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "20",
                y: "11",
                width: "4",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "18.071",
                y: "17.071",
                width: "2",
                height: "4",
                transform: "translate(-7.899 19.071) rotate(-45)",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "11",
                y: "20",
                width: "2",
                height: "4",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2.929",
                y: "18.071",
                width: "4",
                height: "2",
                transform: "translate(-12.042 9.071) rotate(-45)",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                y: "11",
                width: "4",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "3.929",
                y: "2.929",
                width: "2",
                height: "4",
                transform: "translate(-2.042 4.929) rotate(-45)",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "12",
                cy: "12",
                r: "6",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
