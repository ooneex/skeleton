use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretExpandXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretExpandXIcon(props: CaretExpandXIconProps) -> Element {
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
                d: "M45.7204 24.0001L28.9999 35.9433L28.9999 12.0569L45.7204 24.0001Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2.2796 23.9999L19.0001 12.0567L19.0001 35.9431L2.2796 23.9999Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
