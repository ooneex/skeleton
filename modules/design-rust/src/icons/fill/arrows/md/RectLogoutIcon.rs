use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RectLogoutIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RectLogoutIcon(props: RectLogoutIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M32 16L24 23V17H21V15H24V9L32 16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M7 1C4.79086 1 3 2.79086 3 5V27C3 29.2091 4.79086 31 7 31H17C19.2091 31 21 29.2091 21 27V17H11V15H21V5C21 2.79086 19.2091 1 17 1H7Z",
                fill: "currentColor",
            }
        }
    }
}
