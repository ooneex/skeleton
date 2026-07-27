use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GridCirclePlusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GridCirclePlusIcon(props: GridCirclePlusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M37 34V27H34V34L27 34V37L34 37V44H37V37L44 37V34L37 34Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 12.5C4 7.80558 7.80558 4 12.5 4C17.1944 4 21 7.80558 21 12.5C21 17.1944 17.1944 21 12.5 21C7.80558 21 4 17.1944 4 12.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 35.5C4 30.8056 7.80558 27 12.5 27C17.1944 27 21 30.8056 21 35.5C21 40.1944 17.1944 44 12.5 44C7.80558 44 4 40.1944 4 35.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27 12.5C27 7.80558 30.8056 4 35.5 4C40.1944 4 44 7.80558 44 12.5C44 17.1944 40.1944 21 35.5 21C30.8056 21 27 17.1944 27 12.5Z",
                fill: "currentColor",
            }
        }
    }
}
