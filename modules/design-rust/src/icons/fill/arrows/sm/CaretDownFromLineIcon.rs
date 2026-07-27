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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 5L2 5L2 3L22 3L22 5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21.8684 7L11.9999 21.8028L2.13137 7L21.8684 7Z",
                fill: "currentColor",
            }
        }
    }
}
