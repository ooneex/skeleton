use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DoorOpenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DoorOpenIcon(props: DoorOpenIconProps) -> Element {
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
                d: "M19 31.2571V0.74295L4 4.20449V27.7955L19 31.2571ZM16 16H14V20H16V16Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 3H28V29H21V3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
