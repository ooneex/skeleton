use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CurrencyYenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CurrencyYenIcon(props: CurrencyYenIconProps) -> Element {
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
                d: "M6.2 1.59998L12 9.33331L17.8 1.59998L19.4 2.79998L12 12.6666L4.6 2.79998L6.2 1.59998Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 10V23H11V10H13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 11H19V13H5V11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 15H19V17H5V15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
