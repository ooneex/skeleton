use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PolaroidShotsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PolaroidShotsIcon(props: PolaroidShotsIconProps) -> Element {
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
                d: "M28 9C28 6.23858 25.7614 4 23 4L8 4L8 2L23 2C26.866 2 30 5.13401 30 9L30 24L28 24L28 9Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 6C24.2091 6 26 7.79086 26 10V26C26 28.2091 24.2091 30 22 30H6C3.79086 30 2 28.2091 2 26V10C2 7.79086 3.79086 6 6 6H22ZM6 24L22 24L22 10L6 10L6 24Z",
                fill: "currentColor",
            }
        }
    }
}
