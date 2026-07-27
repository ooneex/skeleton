use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChevronLeft2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChevronLeft2Icon(props: ChevronLeft2IconProps) -> Element {
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
                d: "M32.1136 4.81888L15.961 24L32.1136 43.1812L29.8189 45.1136L12.039 24L29.8189 2.88647L32.1136 4.81888Z",
                fill: "currentColor",
            }
        }
    }
}
