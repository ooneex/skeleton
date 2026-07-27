use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PocketIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PocketIcon(props: PocketIconProps) -> Element {
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
                d: "M22 6H18.5V8H22V16.5352L12 23.2021L2 16.5352V8H5.5V6H2V2H22V6ZM7.5 8H11V6H7.5V8ZM13 6V8H16.5V6H13Z",
                fill: "currentColor",
            }
        }
    }
}
