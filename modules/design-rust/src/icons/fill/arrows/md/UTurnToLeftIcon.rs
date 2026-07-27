use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UTurnToLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UTurnToLeftIcon(props: UTurnToLeftIconProps) -> Element {
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
                d: "M28 12.5C28 7.80557 24.1944 4 19.5 4L11 4L11 2L19.5 2C25.299 2 30 6.701 30 12.5C30 18.299 25.299 23 19.5 23L2.50002 23L2.50002 21L19.5 21C24.1944 21 28 17.1944 28 12.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10.9143 29L3.91431 22L10.9143 15L9.50009 13.5858L1.08588 22L9.50009 30.4142L10.9143 29Z",
                fill: "currentColor",
            }
        }
    }
}
