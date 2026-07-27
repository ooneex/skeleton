use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DeleteLeft2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DeleteLeft2Icon(props: DeleteLeft2IconProps) -> Element {
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
                d: "M0.698242 16L11.5316 3L25.9999 3C28.2091 3 29.9999 4.79086 29.9999 7L29.9999 25C29.9999 27.2091 28.2091 29 25.9999 29L11.5316 29L0.698242 16Z",
                fill: "currentColor",
            }
        }
    }
}
