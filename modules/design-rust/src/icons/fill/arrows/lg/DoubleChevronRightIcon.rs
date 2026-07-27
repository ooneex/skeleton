use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DoubleChevronRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DoubleChevronRightIcon(props: DoubleChevronRightIconProps) -> Element {
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
                d: "M24 43.1213L43.1213 24L24 4.87866L21.8787 6.99998L38.8787 24L21.8787 41L24 43.1213Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8.99999 43.1213L28.1213 24L8.99998 4.87866L6.87866 6.99998L23.8787 24L6.87866 41L8.99999 43.1213Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
