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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 11V13H18V17L24 12L18 7V11H16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M16 20V13L9 13V11L16 11V4C16 2.34315 14.6569 1 13 1H6C4.34315 1 3 2.34315 3 4V20C3 21.6569 4.34315 23 6 23H13C14.6569 23 16 21.6569 16 20Z",
                fill: "currentColor",
            }
        }
    }
}
