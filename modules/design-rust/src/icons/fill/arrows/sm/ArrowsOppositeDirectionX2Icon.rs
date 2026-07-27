use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsOppositeDirectionX2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsOppositeDirectionX2Icon(props: ArrowsOppositeDirectionX2IconProps) -> Element {
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
                d: "M2 6L21 6L21 8L2 8L2 6Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21.9998 16.0962L3.00013 16.0961L2.99965 18.0961L4.12102 18.0964L21.9998 18.0962L21.9998 16.0962Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15.5858 11L19.5858 7L15.5858 3L17 1.58579L22.4142 7.00001L17 12.4142L15.5858 11Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8.41421 21.0001L4.41424 17L8.41433 13L7.00013 11.5857L1.58583 17L6.99998 22.4143L8.41421 21.0001Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
