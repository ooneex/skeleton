use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MobileToolbarIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MobileToolbarIcon(props: MobileToolbarIconProps) -> Element {
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
                d: "M10 25H22V27H10V25Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24 5C24 3.89543 23.1046 3 22 3L10 3C8.89543 3 8 3.89543 8 5L8 27C8 28.1046 8.89543 29 10 29L22 29C23.1046 29 24 28.1046 24 27L24 5ZM22 1C24.2091 1 26 2.79086 26 5L26 27C26 29.2091 24.2091 31 22 31L10 31C7.79086 31 6 29.2091 6 27L6 5C6 2.79086 7.79086 0.999999 10 0.999999L22 1Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14.25 5L17.75 5C18.4404 5 19 5.55964 19 6.25C19 6.94035 18.4404 7.5 17.75 7.5L14.25 7.5C13.5596 7.5 13 6.94036 13 6.25C13 5.55964 13.5596 5 14.25 5Z",
                fill: "currentColor",
            }
        }
    }
}
