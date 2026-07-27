use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Itinerary3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Itinerary3Icon(props: Itinerary3IconProps) -> Element {
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
                d: "M23 10L38 10C41.3137 10 44 12.6863 44 16V32C44 35.3137 41.3137 38 38 38H23V35H38C39.6569 35 41 33.6569 41 32V16C41 14.3431 39.6569 13 38 13L23 13L23 10Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 29H19V44H4V29Z",
                fill: "currentColor",
            }
        }
    }
}
