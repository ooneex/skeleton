use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SmokingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SmokingIcon(props: SmokingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22 19H2V25H22V19Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 4H22C25.866 4 29 7.13401 29 11V16H27V11C27 8.23858 24.7614 6 22 6H20V4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 4V7.21429C17 8.595 18.1193 9.71429 19.5 9.71429C21.9853 9.71429 24 11.729 24 14.2143V16H22V14.2143C22 12.8336 20.8807 11.7143 19.5 11.7143C17.0147 11.7143 15 9.69957 15 7.21429V4H17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M24 25H28C29.1046 25 30 24.1046 30 23V21C30 19.8954 29.1046 19 28 19H24V25Z",
                fill: "currentColor",
            }
        }
    }
}
