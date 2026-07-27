use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CheckUnderlineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CheckUnderlineIcon(props: CheckUnderlineIconProps) -> Element {
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
                d: "M42.4583 9.44952L16.5132 36.6597L5.21643 25.1006L7.36196 23.0038L16.4866 32.3403L40.2871 7.37927L42.4583 9.44952Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 39H44V42H4V39Z",
                fill: "currentColor",
            }
        }
    }
}
