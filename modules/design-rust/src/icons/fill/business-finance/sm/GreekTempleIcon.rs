use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GreekTempleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GreekTempleIcon(props: GreekTempleIconProps) -> Element {
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
                d: "M18.5 19L18.5 8L20.5 8L20.5 19L18.5 19Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3.5 19L3.5 8L5.5 8L5.5 19L3.5 19Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8.5 19L8.5 8L10.5 8L10.5 19L8.5 19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13.5 19L13.5 8L15.5 8L15.5 19L13.5 19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M12 0.399658L1 5.44966V9.00001H23V5.44966L12 0.399658Z",
                fill: "currentColor",
            }
            path {
                d: "M4 18C2.34315 18 1 19.3431 1 21V23H23V21C23 19.3431 21.6569 18 20 18H4Z",
                fill: "currentColor",
            }
        }
    }
}
