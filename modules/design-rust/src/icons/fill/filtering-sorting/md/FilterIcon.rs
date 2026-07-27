use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FilterIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FilterIcon(props: FilterIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "3 1 3 6.384 12 16.384 12 31.869 20 26.535 20 16.384 29 6.384 29 1 3 1",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
