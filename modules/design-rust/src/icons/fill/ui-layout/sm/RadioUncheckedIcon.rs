use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RadioUncheckedIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RadioUncheckedIcon(props: RadioUncheckedIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "12",
                cy: "12",
                r: "11",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
