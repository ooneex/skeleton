use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PeopleAlertIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PeopleAlertIcon(props: PeopleAlertIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m5.5,17c-3.033,0-5.5,2.467-5.5,5.5v1.5h11v-1.5c0-3.033-2.467-5.5-5.5-5.5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "5.5",
                cy: "12.5",
                r: "3",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m18.5,17c-3.033,0-5.5,2.467-5.5,5.5v1.5h11v-1.5c0-3.033-2.467-5.5-5.5-5.5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "18.5",
                cy: "12.5",
                r: "3",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "11",
                width: "2",
                height: "7.5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "12",
                cy: "10.75",
                r: "1.25",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
