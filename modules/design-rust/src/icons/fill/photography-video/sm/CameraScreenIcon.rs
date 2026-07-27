use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CameraScreenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CameraScreenIcon(props: CameraScreenIconProps) -> Element {
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
                d: "M23 8C23 6.34314 21.6569 5 20 5H17.5352L15.5352 2H8.46482L6.46482 5L4 5C2.34315 5 1 6.34314 1 8V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V8ZM5 9H15V17H5V9ZM19 9H17V17H19V9Z",
                fill: "currentColor",
            }
        }
    }
}
