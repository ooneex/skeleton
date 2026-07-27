use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowUpIcon(props: ArrowUpIconProps) -> Element {
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
                d: "M13 22V3H11V22H13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4.99991 11.4142L11.9999 4.41418L18.9999 11.4142L20.4141 9.99997L11.9999 1.58576L3.58569 9.99997L4.99991 11.4142Z",
                fill: "currentColor",
            }
        }
    }
}
