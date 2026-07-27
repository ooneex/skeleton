use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BorderIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BorderIcon(props: BorderIconProps) -> Element {
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
                d: "M30 2L30 30L2 30L2 2H30ZM17 7V12H15V7H17ZM17 20H15V25H17V20ZM25 17H20V15H25V17ZM12 17V15H7V17H12Z",
                fill: "currentColor",
            }
        }
    }
}
