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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "22",
                y: "4",
                width: "2",
                height: "6",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2",
                y: "1",
                width: "3",
                height: "22",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m17,1H7v22h10c1.654,0,3-1.346,3-3V4c0-1.654-1.346-3-3-3Zm0,13h-7v-2h7v2Zm0-4h-7v-4h7v4Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
