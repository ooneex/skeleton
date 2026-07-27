use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Reduce2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Reduce2Icon(props: Reduce2IconProps) -> Element {
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
                d: "M20 1.58578L16 5.58579L12 1.58579L10.5858 3.00001L16 8.41421L21.4142 3L20 1.58578Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 30.4142L16 26.4142L12 30.4142L10.5858 29L16 23.5858L21.4142 29L20 30.4142Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 11H30V13H2V11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 19H30V21H2V19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
