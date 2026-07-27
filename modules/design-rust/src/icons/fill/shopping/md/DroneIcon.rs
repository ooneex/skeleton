use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DroneIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DroneIcon(props: DroneIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10.5858 23H21.4142L26.4142 28L25 29.4142L20.5858 25H11.4142L7.00003 29.4142L5.58582 28L10.5858 23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 4V13H6V4H8Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M26 4V13H24V4H26Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 5H13V7H1V5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 5H31V7H19V5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5.5 11C3.01472 11 1 13.0147 1 15.5C1 17.9853 3.01472 20 5.5 20H8.43381L11.4338 25H20.5662L23.5662 20H26.5C28.9853 20 31 17.9853 31 15.5C31 13.0147 28.9853 11 26.5 11H5.5ZM17.75 19.25C17.75 20.2165 16.9665 21 16 21C15.0335 21 14.25 20.2165 14.25 19.25C14.25 18.2835 15.0335 17.5 16 17.5C16.9665 17.5 17.75 18.2835 17.75 19.25Z",
                fill: "currentColor",
            }
        }
    }
}
