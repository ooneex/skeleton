use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FarmIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FarmIcon(props: FarmIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22 15V22H17V17H13V22H8V15H22Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21.3672 6.84473L22.749 13H7.25098L8.63281 6.84473L15 3.89844L21.3672 6.84473ZM14 9V11.0098H16V9H14Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M6 15V22H2V15H6Z",
                fill: "currentColor",
            }
            path {
                d: "M7 1C8.81531 1 10.4043 1.96765 11.2803 3.41504L7.79297 5.0293C7.29916 5.2578 6.92278 5.6762 6.74512 6.18359L5.2998 12.5615C5.26717 12.7069 5.25126 12.8539 5.25195 13H2V6C2 3.23858 4.23858 1 7 1Z",
                fill: "currentColor",
            }
        }
    }
}
