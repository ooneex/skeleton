use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ExternalLinkIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ExternalLinkIcon(props: ExternalLinkIconProps) -> Element {
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
                d: "M21 4C21 2.34315 19.6569 1 18 1H6C4.34314 1 3 2.34315 3 4V20C3 20.4632 3.10496 20.9018 3.29238 21.2934L12.5858 12L8 12V10H16L16 18H14V13.4142L4.7066 22.7076C5.09823 22.8951 5.53686 23 6 23H18C19.6569 23 21 21.6569 21 20V4Z",
                fill: "currentColor",
            }
        }
    }
}
