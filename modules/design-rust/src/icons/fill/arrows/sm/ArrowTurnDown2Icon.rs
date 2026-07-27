use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowTurnDown2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowTurnDown2Icon(props: ArrowTurnDown2IconProps) -> Element {
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
                d: "M15 4C11.6863 4 9 6.68629 9 10V21H7V10C7 5.58172 10.5817 2 15 2H22V4H15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2.99991 15.0858L7.99991 20.0858L12.9999 15.0858L14.4141 16.5L7.99991 22.9142L1.58569 16.5L2.99991 15.0858Z",
                fill: "currentColor",
            }
        }
    }
}
