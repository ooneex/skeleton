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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M47 9V17H44V9H47Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M47 21V29H44V21H47Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M11.5 2H6V46H11.5L11.5 2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M35 46H14.5L14.5 2H35C38.3137 2 41 4.68629 41 8V40C41 43.3137 38.3137 46 35 46ZM19 13H36.5V23H19V13ZM19 30H36.5V27H19V30ZM19 33V36H26V33H19Z",
                fill: "currentColor",
            }
        }
    }
}
