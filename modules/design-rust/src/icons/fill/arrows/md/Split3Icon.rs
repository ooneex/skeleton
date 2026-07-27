use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Split3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Split3Icon(props: Split3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19.0857 11.5L20.4999 12.9143L29.707 3.70715L28.2928 2.29294L19.0857 11.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4.71558 3.30091L3.70693 2.29306L2.29271 3.70727L14.9998 16.4144L14.9997 30.0002L16.9997 30.0002L16.9998 15.586L4.71558 3.30091Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 1.99999L2 2.00003L2 13L4 13L4 4.00002L13 3.99999L13 1.99999Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 1.99999L30 2.00003L30 13L28 13L28 4.00002L19 3.99999L19 1.99999Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
