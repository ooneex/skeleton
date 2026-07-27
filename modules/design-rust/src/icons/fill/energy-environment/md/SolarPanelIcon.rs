use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SolarPanelIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SolarPanelIcon(props: SolarPanelIconProps) -> Element {
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
                d: "M17 21V30H15V21H17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 28H24V30H8V28Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3.50176 6.13228C3.67809 5.33882 4.08308 4.64461 4.6381 4.11273C5.36326 3.41781 6.34453 3 7.40651 3H24.5935C24.7128 3 24.8311 3.00528 24.9482 3.01563C26.67 3.1679 28.1174 4.41862 28.4982 6.13228L31.1649 18.1323C31.6506 20.3181 30.256 22.4056 28.1854 22.8933C27.8896 22.963 27.58 23 27.2601 23H4.73984C2.98054 23 1.53229 21.88 0.979332 20.3682C0.727988 19.681 0.66162 18.9129 0.835096 18.1323L3.50176 6.13228ZM17 7H26.6423L27.0867 9H17V15H28.42L28.8645 17H17V21H15V17H3.1355L3.57995 15H15V9H4.91328L5.35773 7H15V5H17V7Z",
                fill: "currentColor",
            }
        }
    }
}
