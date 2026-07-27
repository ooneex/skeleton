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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21.4055 2.5105L10.6139 16L21.4055 29.4895L19.8438 30.7389L8.05266 16L19.8438 1.26111L21.4055 2.5105Z",
                fill: "currentColor",
            }
        }
    }
}
