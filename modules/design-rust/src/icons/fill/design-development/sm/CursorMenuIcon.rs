use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CursorMenuIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CursorMenuIcon(props: CursorMenuIconProps) -> Element {
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
                d: "M10 18H23V20H10V18Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10 14H23V16H10V14Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10 10H23V24H10V10ZM12 12V22H21V12H12Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M15.0573 5.2232L8.73545 8.73542L5.22309 15.0574L1.00854 1.00854L15.0573 5.2232Z",
                fill: "currentColor",
            }
        }
    }
}
