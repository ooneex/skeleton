use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct File2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn File2Icon(props: File2IconProps) -> Element {
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
                d: "M18.7574 31C19.8182 31 20.8356 30.5786 21.5858 29.8284L27.8284 23.5858C28.5786 22.8356 29 21.8182 29 20.7574V5C29 2.79086 27.2091 1 25 1H7C4.79086 1 3 2.79086 3 5V27C3 29.2091 4.79086 31 7 31H18.7574ZM19 21V29L27 21H19Z",
                fill: "currentColor",
            }
        }
    }
}
