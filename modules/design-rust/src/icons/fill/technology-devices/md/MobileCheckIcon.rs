use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MobileCheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MobileCheckIcon(props: MobileCheckIconProps) -> Element {
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
                d: "M24 20L24 5C24 3.89543 23.1046 3 22 3L10 3C8.89543 3 8 3.89543 8 5L8 27C8 28.1046 8.89543 29 10 29L17 29L17 31L10 31C7.79086 31 6 29.2091 6 27L6 5C6 2.79086 7.79086 0.999999 10 0.999999L22 1C24.2091 1 26 2.79086 26 5L26 20L24 20Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14.25 5L17.75 5C18.4404 5 19 5.55964 19 6.25C19 6.94035 18.4404 7.5 17.75 7.5L14.25 7.5C13.5596 7.5 13 6.94036 13 6.25C13 5.55964 13.5596 5 14.25 5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30.4142 21L21 30.4142L15.5858 25L17 23.5858L21 27.5858L29 19.5858L30.4142 21Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
