use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CubeAxisIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CubeAxisIcon(props: CubeAxisIconProps) -> Element {
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
                d: "M39.2153 36.7874L40.7555 34.2129L46.7559 37.8026L45.2157 40.3771L39.2153 36.7874Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8.78467 36.7871L7.2445 34.2126L1.21321 37.8208L2.75338 40.3953L8.78467 36.7871Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.5 3V11.5001H22.5V3H25.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M7 36.2769V17.8157L22.5 24.0157V42.4769L7 36.2769Z",
                fill: "currentColor",
            }
            path {
                d: "M25.5 42.4769L41 36.2769V17.8157L25.5 24.0157V42.4769Z",
                fill: "currentColor",
            }
            path {
                d: "M24 8.92285L8.42285 15.1537L24 21.3846L39.5771 15.1537L24 8.92285Z",
                fill: "currentColor",
            }
        }
    }
}
