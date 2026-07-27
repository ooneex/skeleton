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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13.768 4.42578L24 20.2389L34.232 4.42578L36.7507 6.05553L24 25.7612L11.2493 6.05554L13.768 4.42578Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22.5 22.5H25.5V44H22.5V22.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 23H36V26H12V23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 30H36V33H12V30Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
