use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BrightnessDecreaseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BrightnessDecreaseIcon(props: BrightnessDecreaseIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "12",
                cy: "12",
                r: "6",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "11",
                y: "1.5",
                width: "2",
                height: "2.5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "17.291",
                y: "4.46",
                width: "2.5",
                height: "2",
                transform: "translate(1.57 14.709) rotate(-45)",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "20",
                y: "11",
                width: "2.5",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "17.541",
                y: "17.291",
                width: "2",
                height: "2.5",
                transform: "translate(-7.68 18.541) rotate(-45)",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "11",
                y: "20",
                width: "2",
                height: "2.5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "4.21",
                y: "17.541",
                width: "2.5",
                height: "2",
                transform: "translate(-11.511 9.291) rotate(-45)",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "1.5",
                y: "11",
                width: "2.5",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "4.46",
                y: "4.21",
                width: "2",
                height: "2.5",
                transform: "translate(-2.261 5.459) rotate(-45)",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
