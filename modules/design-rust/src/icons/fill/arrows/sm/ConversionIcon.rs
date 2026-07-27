use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ConversionIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ConversionIcon(props: ConversionIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14 1.08582V8.00003H2V10H22.9142L14 1.08582Z",
                fill: "currentColor",
            }
            path {
                d: "M1.08569 14L9.99991 22.9142V16H21.9999V14H1.08569Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
