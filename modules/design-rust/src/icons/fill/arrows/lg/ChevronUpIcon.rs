use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChevronUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChevronUpIcon(props: ChevronUpIconProps) -> Element {
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
                d: "M5.99998 33.1213L24 15.1213L42 33.1213L44.1213 31L24 10.8787L3.87866 31L5.99998 33.1213Z",
                fill: "currentColor",
            }
        }
    }
}
