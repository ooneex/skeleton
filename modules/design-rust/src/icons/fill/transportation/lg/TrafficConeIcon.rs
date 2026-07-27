use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TrafficConeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TrafficConeIcon(props: TrafficConeIconProps) -> Element {
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
                d: "M7.54997 40.6878H40.45L28.724 5H19.276L7.54997 40.6878ZM30.1747 19H17.8212L19.7963 13H28.1985L30.1747 19ZM34.4557 32H13.5417L15.5168 26H32.479L34.4557 32Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 39H44V42H4V39Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
