use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChevronLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChevronLeftIcon(props: ChevronLeftIconProps) -> Element {
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
                d: "M33.1213 5.99998L15.1213 24L33.1213 42L31 44.1213L10.8787 24L31 3.87866L33.1213 5.99998Z",
                fill: "currentColor",
            }
        }
    }
}
