use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct EditTriangleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn EditTriangleIcon(props: EditTriangleIconProps) -> Element {
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
                d: "M11.1 5.8001L19.8 17.4001L21.4 16.2001L12.7 4.6001L11.1 5.8001Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12.9 5.8001L4.19998 17.4001L2.59998 16.2001L11.3 4.6001L12.9 5.8001Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 17.5H19V19.5H5V17.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M15 0.5H9V6.5H15V0.5Z",
                fill: "currentColor",
            }
            path {
                d: "M23.5 15.5H17.5V21.5H23.5V15.5Z",
                fill: "currentColor",
            }
            path {
                d: "M6.5 15.5H0.5V21.5H6.5V15.5Z",
                fill: "currentColor",
            }
        }
    }
}
