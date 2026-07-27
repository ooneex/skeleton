use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowDownRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowDownRightIcon(props: ArrowDownRightIconProps) -> Element {
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
                d: "M4.87869 6.99998L39.4393 41.5607L41.5607 39.4393L7.00001 4.87866L4.87869 6.99998Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M39 24V39H24V42H42V24H39Z",
                fill: "currentColor",
            }
        }
    }
}
