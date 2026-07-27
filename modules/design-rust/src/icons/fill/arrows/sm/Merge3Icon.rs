use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Merge3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Merge3Icon(props: Merge3IconProps) -> Element {
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
                d: "M12.9999 12.4143L2.99988 22.4142L1.58568 21L10.9999 11.5859L10.9999 2.00002L12.9999 2.00002L12.9999 12.4143Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18.4454 7.34311L12.0312 0.928895L5.61694 7.34311L7.03116 8.75732L12.0312 3.75732L17.0312 8.75732L18.4454 7.34311Z",
                fill: "currentColor",
            }
            path {
                d: "M14.5856 15.9999L15.9998 14.5857L22.4141 20.9999L20.9998 22.4141L14.5856 15.9999Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
