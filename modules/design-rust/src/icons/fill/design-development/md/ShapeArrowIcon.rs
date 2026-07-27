use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShapeArrowIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShapeArrowIcon(props: ShapeArrowIconProps) -> Element {
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
                d: "M2.58583 28.0001L27.2929 3.29299L28.7072 4.7072L4.00005 29.4143L2.58583 28.0001Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27 16V5H16V3H29V16H27Z",
                fill: "currentColor",
            }
        }
    }
}
