use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RouteOpenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RouteOpenIcon(props: RouteOpenIconProps) -> Element {
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
                d: "M24 9C15.7157 9 9 15.7157 9 24C9 32.2843 15.7157 39 24 39C32.2843 39 39 32.2843 39 24C39 15.7157 32.2843 9 24 9ZM32.7666 20.3547L30.6453 18.2334L22.5 26.3787L17.8446 21.7233L15.7233 23.8446L22.5 30.6213L32.7666 20.3547Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M42 22.5H47V25.5H42V22.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 22.5H6V25.5H1V22.5Z",
                fill: "currentColor",
            }
        }
    }
}
