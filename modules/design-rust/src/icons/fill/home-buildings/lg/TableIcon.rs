use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TableIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TableIcon(props: TableIconProps) -> Element {
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
                d: "M6 23L6 42L9 42L9 23L6 23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M39 23L39 42L42 42L42 23L39 23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M32 23L35 23L35 35L32 35L32 23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16 23L13 23L13 35L16 35L16 23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M46 20H2V26L46 26V20Z",
                fill: "currentColor",
            }
            path {
                d: "M45.5936 17H2.40637L8.40637 6H39.5936L45.5936 17Z",
                fill: "currentColor",
            }
        }
    }
}
