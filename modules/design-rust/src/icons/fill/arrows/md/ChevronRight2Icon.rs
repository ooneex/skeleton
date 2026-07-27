use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChevronRight2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChevronRight2Icon(props: ChevronRight2IconProps) -> Element {
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
                d: "M10.5945 29.4895L21.3861 16L10.5945 2.51049L12.1562 1.2611L23.9473 16L12.1562 30.7389L10.5945 29.4895Z",
                fill: "currentColor",
            }
        }
    }
}
