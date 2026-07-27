use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UsbIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UsbIcon(props: UsbIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M6 1H18V9L15 9V6H13V9H11V6H9V9H6V1Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 16V11H20V16C20 20.4183 16.4183 24 12 24C7.58172 24 4 20.4183 4 16ZM14 17V15H10V17H14Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
