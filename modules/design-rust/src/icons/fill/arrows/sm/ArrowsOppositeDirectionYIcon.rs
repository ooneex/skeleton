use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsOppositeDirectionYIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsOppositeDirectionYIcon(props: ArrowsOppositeDirectionYIconProps) -> Element {
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
                d: "M18 8.99994L18 20.9999L16 20.9999L16 8.99994L18 8.99994Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 15L8 3L6 3L6 15L8 15Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12.9999 15.5859L17 19.5856L21 15.5856L22.4142 16.9998L17 22.414L11.5858 17.0002L12.9999 15.5859Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3.00003 8.4144L7.00003 4.4144L11 8.4144L12.4142 7.00018L7.00003 1.58597L1.58582 7.00018L3.00003 8.4144Z",
                fill: "currentColor",
            }
        }
    }
}
