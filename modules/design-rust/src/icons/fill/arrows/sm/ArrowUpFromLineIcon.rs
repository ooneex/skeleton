use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowUpFromLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowUpFromLineIcon(props: ArrowUpFromLineIconProps) -> Element {
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
                d: "M2 20L22 20L22 22L2 22L2 20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11 18L11 3L13 3L13 18L11 18Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18.0001 10.4142L12.0001 4.41418L6.00009 10.4142L4.58588 8.99997L12.0001 1.58576L19.4143 8.99997L18.0001 10.4142Z",
                fill: "currentColor",
            }
        }
    }
}
