use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PlaneLandingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PlaneLandingIcon(props: PlaneLandingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M29.0683 6.88808L23.1048 5.89618L21.3196 17.6597L14.3917 13.6599L13.9275 6.46379L8.73899 3.46814L6.5563 17.3079C6.36292 18.5341 6.94466 19.7527 8.01967 20.3733L36.275 36.6865C37.7098 37.515 39.5446 37.0233 40.373 35.5885C42.0299 32.7187 41.0466 29.0492 38.1769 27.3923L30.8224 23.1462L29.0683 6.88808Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 39H46V42H2V39Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
