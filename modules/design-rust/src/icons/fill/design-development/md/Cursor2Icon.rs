use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Cursor2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Cursor2Icon(props: Cursor2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25.8213 25.8215C24.8154 26.8274 23.1844 26.8274 22.1784 25.8215L14.6602 18.3032L8.94481 23.9553L4.1416 4.14185L23.9551 8.94501L18.3031 14.6603L25.8213 22.1786C26.8273 23.1846 26.8273 24.8155 25.8213 25.8215Z",
                fill: "currentColor",
            }
        }
    }
}
