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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14 23.2559V0.790222L3 2.8975V20.7272L14 23.2559ZM12 12H10V15H12V12Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16 3H21V21H16V3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
