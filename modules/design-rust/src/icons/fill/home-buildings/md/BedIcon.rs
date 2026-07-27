use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BedIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BedIcon(props: BedIconProps) -> Element {
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
                d: "M6 10H12C14.2091 10 16 11.7909 16 14V15H6V10Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 5V17H30V27H28V23H4V27H2V5H4Z",
                fill: "currentColor",
            }
        }
    }
}
