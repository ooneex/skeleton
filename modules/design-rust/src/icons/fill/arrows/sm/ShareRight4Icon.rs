use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShareRight4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShareRight4Icon(props: ShareRight4IconProps) -> Element {
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
                d: "M20 16V20H2V22H22V16H20Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 15C4 11.6863 6.68629 9 10 9L18 9L18 7L10 7C5.58172 7 2 10.5817 2 15L2 17L4 17L4 15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12.0857 3.00003L17.0857 8.00003L12.0857 13L13.4999 14.4142L19.9141 8.00003L13.4999 1.58582L12.0857 3.00003Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
