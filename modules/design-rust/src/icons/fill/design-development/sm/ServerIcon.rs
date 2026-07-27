use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ServerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ServerIcon(props: ServerIconProps) -> Element {
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
                d: "M2 5C2 3.34315 3.34315 2 5 2H11V22H5C3.34315 22 2 20.6569 2 19V5ZM5 6V8H8V6H5ZM5 14H8V16H5V14ZM5 10V12H8V10H5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 22V2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H13ZM16 6V8H19V6H16ZM16 14H19V16H16V14ZM16 10V12H19V10H16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
