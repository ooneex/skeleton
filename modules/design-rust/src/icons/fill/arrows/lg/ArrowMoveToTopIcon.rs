use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowMoveToTopIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowMoveToTopIcon(props: ArrowMoveToTopIconProps) -> Element {
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
                d: "M44 44H4V41H44V44Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18 31H4V28H18V31Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44 31H30V28H44V31Z",
                fill: "currentColor",
            }
            path {
                d: "M35.2426 15L24.1213 3.87866L13 15L15.1213 17.1213L22.6211 9.62153V37H25.6211V9.62108L33.1213 17.1213L35.2426 15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
