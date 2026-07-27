use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShowersIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShowersIcon(props: ShowersIconProps) -> Element {
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
                d: "M21.4142 4.00003L11 14.4142L9.58582 13L20 2.58582L21.4142 4.00003Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12.4142 4.00003L2.00003 14.4142L0.585815 13L11 2.58582L12.4142 4.00003Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21.4142 13L11 23.4142L9.58582 22L20 11.5858L21.4142 13Z",
                fill: "currentColor",
            }
        }
    }
}
