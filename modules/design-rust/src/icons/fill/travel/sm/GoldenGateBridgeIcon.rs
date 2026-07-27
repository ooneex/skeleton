use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GoldenGateBridgeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GoldenGateBridgeIcon(props: GoldenGateBridgeIconProps) -> Element {
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
                d: "M13 13V18H11V13H13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18 12V18H16V12H18Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 12V18H6V12H8Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2.98111 3.82104L3.18005 4.80106C4.01385 8.90867 7.64704 12 12 12C16.353 12 19.9861 8.90867 20.8199 4.80106L21.0189 3.82104L22.9789 4.21891L22.78 5.19892C21.7607 10.2203 17.3229 14 12 14C6.67713 14 2.2393 10.2203 1.22002 5.19892L1.02109 4.21891L2.98111 3.82104Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 19L1 19L1 17L23 17L23 19Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 3V21H1V3H3Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 3V21H21V3H23Z",
                fill: "currentColor",
            }
        }
    }
}
