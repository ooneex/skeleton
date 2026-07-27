use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MarsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MarsIcon(props: MarsIconProps) -> Element {
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
                d: "M18.793 11.7929L28.293 2.29291L29.7072 3.70712L20.2072 13.2071L18.793 11.7929Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 18.5C4 13.2533 8.25329 9 13.5 9C18.7467 9 23 13.2533 23 18.5C23 23.7467 18.7467 28 13.5 28C8.25329 28 4 23.7467 4 18.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 2H30V12H28V4H20V2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
