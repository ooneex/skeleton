use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LaptopCheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LaptopCheckIcon(props: LaptopCheckIconProps) -> Element {
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
                d: "M7 5C5.89543 5 5 5.89543 5 7V21H3V7C3 4.79086 4.79086 3 7 3H25C27.2091 3 29 4.79086 29 7V21H27V7C27 5.89543 26.1046 5 25 5H7Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23.9142 9.50003L14.5 18.9142L9.08582 13.5L10.5 12.0858L14.5 16.0858L22.5 8.08582L23.9142 9.50003Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M1 23V26C1 27.1046 1.89543 28 3 28H29C30.1046 28 31 27.1046 31 26V23H22C22 23.5523 21.5523 24 21 24H11C10.4477 24 10 23.5523 10 23H1Z",
                fill: "currentColor",
            }
        }
    }
}
