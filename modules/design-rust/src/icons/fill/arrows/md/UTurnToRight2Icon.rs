use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UTurnToRight2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UTurnToRight2Icon(props: UTurnToRight2IconProps) -> Element {
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
                d: "M4 20L4 6C4 4.89543 4.89543 4 6 4L16 4L16 2L6 2C3.79086 2 2 3.79086 2 6L2 20C2 22.2091 3.79086 24 6 24L29 24L29 22L6 22C4.89543 22 4 21.1046 4 20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20.5857 16L27.5857 23L20.5857 30L21.9999 31.4142L30.4141 23L21.9999 14.5858L20.5857 16Z",
                fill: "currentColor",
            }
        }
    }
}
