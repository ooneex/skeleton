use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SortBottomToTopIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SortBottomToTopIcon(props: SortBottomToTopIconProps) -> Element {
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
                d: "M29 38L44 38L44 41L29 41L29 38Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M29 11L44 11L44 14L29 14L29 11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M29 24.5L44 24.5L44 27.5L29 27.5L29 24.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 26C1 17.7157 7.71573 11 16 11H23V14H16C9.37258 14 4 19.3726 4 26C4 32.6274 9.37258 38 16 38H21.5V41H16C7.71573 41 1 34.2843 1 26Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 22.6213L25.1213 12.5L15 2.3787L12.8787 4.50002L20.8787 12.5L12.8787 20.5L15 22.6213Z",
                fill: "currentColor",
            }
        }
    }
}
