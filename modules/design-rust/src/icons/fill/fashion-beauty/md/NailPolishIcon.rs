use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NailPolishIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NailPolishIcon(props: NailPolishIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21 14H11V3C11 1.89543 11.8954 1 13 1H19C20.1046 1 21 1.89543 21 3V14Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 16C24.1046 16 25 16.8954 25 18V27C25 29.2091 23.2091 31 21 31H11C8.79086 31 7 29.2091 7 27V18C7 16.8954 7.89543 16 9 16H23ZM11.2803 20L12.6807 27H19.3193L20.7197 20H11.2803Z",
                fill: "currentColor",
            }
        }
    }
}
