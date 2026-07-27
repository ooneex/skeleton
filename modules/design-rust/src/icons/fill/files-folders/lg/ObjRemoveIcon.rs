use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ObjRemoveIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ObjRemoveIcon(props: ObjRemoveIconProps) -> Element {
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
                d: "M15 14.5L33 14.5V17.5L15 17.5V14.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 31V38C7 39.6569 8.34315 41 10 41H38C39.6569 41 41 39.6569 41 38V31H44V38C44 41.3137 41.3137 44 38 44H10C6.68629 44 4 41.3137 4 38V31H7Z",
                fill: "currentColor",
            }
        }
    }
}
