use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsOppositeDirectionXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsOppositeDirectionXIcon(props: ArrowsOppositeDirectionXIconProps) -> Element {
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
                d: "M15 5.99998L3.0001 5.99993L2.99993 7.99993L4.33991 8.00005L15 7.99998L15 5.99998Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 16L21 16L21 18L9 18L9 16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8.41426 2.99996L4.41423 7.00003L8.41426 11.0001L7.00003 12.4143L1.58582 7.00003L7.00004 1.58575L8.41426 2.99996Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 11.5858L22.4142 17L17.0001 22.4142L15.5858 21L19.5858 17L15.5858 12.9999L17 11.5858Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
