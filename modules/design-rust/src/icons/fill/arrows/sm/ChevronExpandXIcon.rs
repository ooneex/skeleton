use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChevronExpandXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChevronExpandXIcon(props: ChevronExpandXIconProps) -> Element {
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
                d: "M7.50009 18.9142L0.585881 12L7.50009 5.08582L8.91431 6.50003L3.41431 12L8.91431 17.5L7.50009 18.9142Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15.0857 6.50003L20.5857 12L15.0857 17.5L16.4999 18.9142L23.4141 12L16.4999 5.08582L15.0857 6.50003Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
