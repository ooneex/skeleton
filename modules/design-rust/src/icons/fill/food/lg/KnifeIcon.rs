use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct KnifeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn KnifeIcon(props: KnifeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19.8233 38.5635L13.3106 44.9854C11.6709 46.6018 9.02715 46.5704 7.42678 44.915C5.85664 43.2907 5.87919 40.707 7.47658 39.1094L13.9229 32.6631L19.8233 38.5635Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23.0801 5.63603C27.7663 0.949999 35.3636 0.95004 40.0498 5.63603L46.4141 12.0003L21.958 36.4554L7.10938 21.6067L23.0801 5.63603ZM18.1816 26.9466L20.3027 29.0677L30.208 19.1634L28.0859 17.0423L18.1816 26.9466Z",
                fill: "currentColor",
            }
        }
    }
}
