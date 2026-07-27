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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31 4H41V44H31V4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M28 46.5993V2.17075L7 6.17256V41.7971L28 46.5993ZM20 23V31H23V26H25V23H20Z",
                fill: "currentColor",
            }
        }
    }
}
