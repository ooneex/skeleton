use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextBoldIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextBoldIcon(props: TextBoldIconProps) -> Element {
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
                d: "M9 10H15C18.3137 10 21 12.6863 21 16C21 19.3137 18.3137 22 15 22H9V20H15C17.2091 20 19 18.2091 19 16C19 13.7909 17.2091 12 15 12H9V10Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 2H13C15.7614 2 18 4.23858 18 7C18 9.76142 15.7614 12 13 12H8V10H13C14.6569 10 16 8.65685 16 7C16 5.34315 14.6569 4 13 4H9V2Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 2H11V4H9V20H11V22H5V2Z",
                fill: "currentColor",
            }
        }
    }
}
