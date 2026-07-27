use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShareLeft4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShareLeft4Icon(props: ShareLeft4IconProps) -> Element {
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
                d: "M4 22V28H30V30H2V22H4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M28 20L28 23L30 23L30 20C30 13.9249 25.0751 9 19 9L7.00001 9L7.00001 11L19 11C23.9706 11 28 15.0295 28 20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15.4141 3.00003L8.41406 10L15.4141 17L13.9998 18.4142L5.58563 10L13.9998 1.58582L15.4141 3.00003Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
