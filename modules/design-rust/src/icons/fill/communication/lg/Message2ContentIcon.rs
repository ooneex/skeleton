use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Message2ContentIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Message2ContentIcon(props: Message2ContentIconProps) -> Element {
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
                d: "M8 6C4.68629 6 2 8.68629 2 12V30C2 33.3137 4.68629 36 8 36H16.5109L24 45.6288L31.4891 36H40C43.3137 36 46 33.3137 46 30V12C46 8.68629 43.3137 6 40 6H8ZM11 18.5H37V15.5H11V18.5ZM11 26.5H26V23.5H11V26.5Z",
                fill: "currentColor",
            }
        }
    }
}
