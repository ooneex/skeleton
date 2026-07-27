use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretExpandXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretExpandXIcon(props: CaretExpandXIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M31.7437 16L18.9999 24.9207L18.9999 7.07935L31.7437 16Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M0.256103 16L12.9999 7.07934L12.9999 24.9207L0.256103 16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
