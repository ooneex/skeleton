use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SliceIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SliceIcon(props: SliceIconProps) -> Element {
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
                d: "M14.0978 11.6562L19.1837 2.84717C20.3832 0.769565 23.0398 0.0577254 25.1174 1.25722C27.195 2.45672 27.9068 5.11334 26.7073 7.19095L21.6215 16L14.0978 11.6562Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M13.0984 13.3887L2.52979 31.6941L18.5069 26.3519L16.8121 20.027L18.7582 16.6563L13.0984 13.3887Z",
                fill: "currentColor",
            }
        }
    }
}
