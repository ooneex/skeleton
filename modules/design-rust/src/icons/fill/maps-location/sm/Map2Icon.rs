use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Map2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Map2Icon(props: Map2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5 1.98853L1 4.3818V22.1543L5 19.627V1.98853Z",
                fill: "currentColor",
            }
            path {
                d: "M7 19.7059L11 22.1293V4.19768L7 1.87109V19.7059Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M13 4.19768L17 1.87109V19.7059L13 22.1293V4.19768Z",
                fill: "currentColor",
            }
            path {
                d: "M23 22.1543L19 19.627V1.98853L23 4.3818V22.1543Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
