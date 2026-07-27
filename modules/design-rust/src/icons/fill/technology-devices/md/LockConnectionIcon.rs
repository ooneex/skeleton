use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LockConnectionIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LockConnectionIcon(props: LockConnectionIconProps) -> Element {
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
                d: "M14 7C11.7909 7 10 8.79086 10 11V16H8V11C8 7.68629 10.6863 5 14 5C17.3137 5 20 7.68629 20 11V16H18V11C18 8.79086 16.2091 7 14 7Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 14C4.34315 14 3 15.3431 3 17V26C3 27.6569 4.34315 29 6 29H22C23.6569 29 25 27.6569 25 26V17C25 15.3431 23.6569 14 22 14H6ZM15 24V19H13V24H15Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 2H23C27.9706 2 32 6.02944 32 11V12H30V11C30 7.13401 26.866 4 23 4H22V2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 6H23C25.7614 6 28 8.23858 28 11V12H26V11C26 9.34315 24.6569 8 23 8H22V6Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
