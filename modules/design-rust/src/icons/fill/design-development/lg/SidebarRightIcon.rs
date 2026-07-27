use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SidebarRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SidebarRightIcon(props: SidebarRightIconProps) -> Element {
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
                d: "M8 6C4.68629 6 2 8.68629 2 12V36C2 39.3137 4.68629 42 8 42H40C43.3137 42 46 39.3137 46 36V12C46 8.68629 43.3137 6 40 6H8ZM5 12C5 10.3431 6.34315 9 8 9H29V39H8C6.34315 39 5 37.6569 5 36V12ZM33 22.5H42V25.5H33V22.5ZM42 15.5H33V18.5H42V15.5ZM33 29.5H42V32.5H33V29.5Z",
                fill: "currentColor",
            }
        }
    }
}
