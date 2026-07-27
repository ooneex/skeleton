use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PointerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PointerIcon(props: PointerIconProps) -> Element {
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
                d: "M6.53387 6.53394L45.2285 17.7498L26.9313 26.9313L17.7497 45.2285L6.53387 6.53394Z",
                fill: "currentColor",
            }
        }
    }
}
