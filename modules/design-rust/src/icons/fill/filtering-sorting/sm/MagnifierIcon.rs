use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MagnifierIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MagnifierIcon(props: MagnifierIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "16.75",
                y: "12.861",
                width: "2",
                height: "9.778",
                transform: "translate(-7.352 17.75) rotate(-45)",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m10,18c-4.411,0-8-3.589-8-8S5.589,2,10,2s8,3.589,8,8-3.589,8-8,8Zm0-14c-3.309,0-6,2.691-6,6s2.691,6,6,6,6-2.691,6-6-2.691-6-6-6Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "10",
                cy: "10",
                r: "4",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
