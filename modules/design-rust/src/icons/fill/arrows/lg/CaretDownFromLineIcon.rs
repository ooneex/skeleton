use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretDownFromLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretDownFromLineIcon(props: CaretDownFromLineIconProps) -> Element {
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
                d: "M44 9L4 9.00001L4 6.00001L44 6L44 9Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M41 14L7 14L24 40L41 14Z",
                fill: "currentColor",
            }
        }
    }
}
