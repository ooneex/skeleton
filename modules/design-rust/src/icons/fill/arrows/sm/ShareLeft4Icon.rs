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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 16V20H22V22H2V16H4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 15C20 11.6863 17.3137 9 14 9L6 9L6 7L14 7C18.4183 7 22 10.5817 22 15L22 17L20 17L20 15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11.9143 3.00003L6.91431 8.00003L11.9143 13L10.5001 14.4142L4.08588 8.00003L10.5001 1.58582L11.9143 3.00003Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
