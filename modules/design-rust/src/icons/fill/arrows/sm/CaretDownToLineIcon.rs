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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21.8687 3L12.0001 17.8028L2.13162 3L21.8687 3Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 19L22 19L22 21L2 21L2 19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
