use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowBackToUpRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowBackToUpRightIcon(props: ArrowBackToUpRightIconProps) -> Element {
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
                d: "M28 26L28 19L30 19L30 26C30 28.2091 28.2091 30 26 30L6 30C3.79086 30 2 28.2091 2 26L2 12C2 9.79086 3.79086 8 6 8L29 8L29 10L6 10C4.89543 10 4 10.8954 4 12L4 26C4 27.1046 4.89543 28 6 28L26 28C27.1046 28 28 27.1046 28 26Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20.5858 16L27.5858 8.99997L20.5858 1.99997L22 0.585758L30.4142 8.99997L22 17.4142L20.5858 16Z",
                fill: "currentColor",
            }
        }
    }
}
