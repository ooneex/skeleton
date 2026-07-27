use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretDownToLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretDownToLineIcon(props: CaretDownToLineIconProps) -> Element {
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
                d: "M44 39L4 39L4 42L44 42L44 39Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7.15137 7L24 32.8273L40.8486 7.00001L7.15137 7Z",
                fill: "currentColor",
            }
        }
    }
}
