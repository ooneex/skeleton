use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowDownToLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowDownToLineIcon(props: ArrowDownToLineIconProps) -> Element {
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
                d: "M2 20H22V22H2V20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 2V17H11V2H13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6.00003 9.58582L12 15.5858L18 9.58582L19.4142 11L12 18.4142L4.58582 11L6.00003 9.58582Z",
                fill: "currentColor",
            }
        }
    }
}
