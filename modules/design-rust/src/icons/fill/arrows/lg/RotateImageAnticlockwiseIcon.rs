use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RotateImageAnticlockwiseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RotateImageAnticlockwiseIcon(props: RotateImageAnticlockwiseIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16.5 27C18.433 27 20 25.433 20 23.5C20 21.567 18.433 20 16.5 20C14.567 20 13 21.567 13 23.5C13 25.433 14.567 27 16.5 27Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M33 0.878662L23.8787 9.99998H36.5C40.6422 9.99998 44 13.3578 44 17.5V21H47V17.5C47 11.701 42.299 6.99998 36.5 6.99998H33V0.878662Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 13C8.68629 13 6 15.6863 6 19V36C6 39.3137 8.68629 42 12 42H35C38.3137 42 41 39.3137 41 36V19C41 15.6863 38.3137 13 35 13H12ZM9 19C9 17.3431 10.3431 16 12 16H35C36.6569 16 38 17.3431 38 19V31.5859L28.9544 22.5403L14.4311 39H12C10.3431 39 9 37.6569 9 36V19Z",
                fill: "currentColor",
            }
        }
    }
}
