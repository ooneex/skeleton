use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsBoldOppositeDirectionXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsBoldOppositeDirectionXIcon(props: ArrowsBoldOppositeDirectionXIconProps) -> Element {
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
                d: "M31 3.91937L43.6008 14L31 24.0806V18.0001L6 18V10L31 10.0001V3.91937Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 23.9193L4.39922 34L17 44.0806V38L42 38V30L17 30V23.9193Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
