use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AddressBook2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AddressBook2Icon(props: AddressBook2IconProps) -> Element {
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
                d: "M23 31H9V1H23C25.2091 1 27 2.79086 27 5V27C27 29.2091 25.2091 31 23 31ZM23 8H12V14H23V8ZM23 16H12V18H23V16Z",
                fill: "currentColor",
            }
            path {
                d: "M7 1H3V31H7V1Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31 7V15H29V7H31Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
