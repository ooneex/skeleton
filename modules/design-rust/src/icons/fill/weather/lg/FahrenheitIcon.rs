use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FahrenheitIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FahrenheitIcon(props: FahrenheitIconProps) -> Element {
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
                d: "M17.5 10.5H39V13.5H20.5V44H17.5V10.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17.5 24.5H33V27.5H17.5V24.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 7C7.89543 7 7 7.89543 7 9C7 10.1046 7.89543 11 9 11C10.1046 11 11 10.1046 11 9C11 7.89543 10.1046 7 9 7ZM4 9C4 6.23858 6.23858 4 9 4C11.7614 4 14 6.23858 14 9C14 11.7614 11.7614 14 9 14C6.23858 14 4 11.7614 4 9Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
