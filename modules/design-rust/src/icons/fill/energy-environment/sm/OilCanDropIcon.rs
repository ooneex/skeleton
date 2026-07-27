use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct OilCanDropIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn OilCanDropIcon(props: OilCanDropIconProps) -> Element {
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
                d: "M8 4V8H6V4H8Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 3H11V5H3V3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 10C1 8.34315 2.34315 7 4 7H11.5L14.4269 10.9025L23 9.29507V12.4538L15.224 19.2577C14.6772 19.7362 13.9752 20 13.2485 20H4C2.34315 20 1 18.6569 1 17V10ZM4 15V17H8V15H4Z",
                fill: "currentColor",
            }
            path {
                d: "M21 17C22.0388 17.8333 23 19.0833 23 20.1571C23 21.2899 22.1045 22 21 22C19.8955 22 19 21.2899 19 20.1571C19 19.0833 19.9719 17.8333 21 17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
