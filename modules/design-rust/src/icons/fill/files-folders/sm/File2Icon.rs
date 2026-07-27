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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12.9216 23C13.7172 23 14.4803 22.6839 15.0429 22.1213L20.1213 17.0429C20.6839 16.4803 21 15.7172 21 14.9216V4C21 2.34315 19.6569 1 18 1H6C4.34315 1 3 2.34315 3 4V20C3 21.6569 4.34315 23 6 23H12.9216ZM13 15H19L13 21V15Z",
                fill: "currentColor",
            }
        }
    }
}
