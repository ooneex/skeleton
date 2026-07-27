use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WindsockIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WindsockIcon(props: WindsockIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 5.76693L21 7.87732L21 32.1227L11 34.2331V5.76693Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 2V46H5V2H8Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M36 28.9571L46 26.8467V13.1533L36 11.0429V28.9571Z",
                fill: "currentColor",
            }
            path {
                d: "M33 10.4098L24 8.51044L24 31.4896L33 29.5902V10.4098Z",
                fill: "currentColor",
            }
        }
    }
}
