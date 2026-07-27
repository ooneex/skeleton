use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BoltSlashIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BoltSlashIcon(props: BoltSlashIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14.8234 0.0866699L14.1452 9.04525L14 10L9 14.9548H1.79402L14.8234 0.0866699Z",
                fill: "currentColor",
            }
            path {
                d: "M9.57359 18.6691L9.17659 23.9134L22.206 9.04529H19.1974L9.57359 18.6691Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22.4142 3.00003L3 22.4142L1.58578 21L21 1.58582L22.4142 3.00003Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
