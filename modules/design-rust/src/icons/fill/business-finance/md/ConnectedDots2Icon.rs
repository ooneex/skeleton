use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ConnectedDots2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ConnectedDots2Icon(props: ConnectedDots2IconProps) -> Element {
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
                d: "M16 24V26H9.93782V24H16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10.6097 15.5482L8.91079 14.4929L12.6505 8.47235L14.366 9.5L10.6097 15.5482Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22.843 14.628L26.366 20.5L24.6425 21.5145L21.128 15.657L22.843 14.628Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11 6C11 3.23858 13.2386 1 16 1C18.7614 1 21 3.23858 21 6C21 8.76142 18.7614 11 16 11C13.2386 11 11 8.76142 11 6Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 25C21 22.2386 23.2386 20 26 20C28.7614 20 31 22.2386 31 25C31 27.7614 28.7614 30 26 30C23.2386 30 21 27.7614 21 25Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 25C1 22.2386 3.23858 20 6 20C8.76142 20 11 22.2386 11 25C11 27.7614 8.76142 30 6 30C3.23858 30 1 27.7614 1 25Z",
                fill: "currentColor",
            }
        }
    }
}
