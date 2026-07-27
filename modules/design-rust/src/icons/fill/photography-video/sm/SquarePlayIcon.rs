use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquarePlayIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquarePlayIcon(props: SquarePlayIconProps) -> Element {
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
                d: "M19 2C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34314 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H19ZM18.0156 12L8 6.27679V17.7232L18.0156 12Z",
                fill: "currentColor",
            }
        }
    }
}
