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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2.58583 20.0001L19.2929 3.29299L20.7072 4.7072L4.00005 21.4143L2.58583 20.0001Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 12V5H12V3H21V12H19Z",
                fill: "currentColor",
            }
        }
    }
}
