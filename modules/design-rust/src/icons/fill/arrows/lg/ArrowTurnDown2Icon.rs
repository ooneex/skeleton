use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowTurnDown2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowTurnDown2Icon(props: ArrowTurnDown2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 7C22.5442 7 16.5 13.0442 16.5 20.5V43H13.5V20.5C13.5 11.3873 20.8873 4 30 4H44V7H30Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4.99998 30.8787L15 40.8787L25 30.8787L27.1213 33L15 45.1213L2.87866 33L4.99998 30.8787Z",
                fill: "currentColor",
            }
        }
    }
}
