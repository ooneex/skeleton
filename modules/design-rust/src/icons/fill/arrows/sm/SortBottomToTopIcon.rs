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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14 19H22V21H14V19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14 12H22V14H14V12Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14 5H22V7H14V5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 13C1 8.58172 4.58172 5 9 5H11V7H9C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H11V21H9C4.58172 21 1 17.4183 1 13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7.99991 1.58582L12.4141 6.00003L7.99991 10.4142L6.58569 9.00003L9.58569 6.00003L6.58569 3.00003L7.99991 1.58582Z",
                fill: "currentColor",
            }
        }
    }
}
