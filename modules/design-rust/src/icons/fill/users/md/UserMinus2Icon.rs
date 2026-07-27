use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UserMinus2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UserMinus2Icon(props: UserMinus2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8.5 7.5C8.5 4.46243 10.9624 2 14 2C17.0376 2 19.5 4.46243 19.5 7.5C19.5 10.5376 17.0376 13 14 13C10.9624 13 8.5 10.5376 8.5 7.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 26.7188C2 20.2142 7.40609 15 14 15C20.5939 15 26 20.2142 26 26.7188V27.4542L25.2929 27.6262C17.7668 29.4579 10.2332 29.4579 2.70706 27.6262L2 27.4542V26.7188Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 12H32V14H22V12Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
