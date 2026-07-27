use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShareRight3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShareRight3Icon(props: ShareRight3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14.9231 3L30 16L14.9231 29V20.32H11.68C6.33388 20.32 2 24.6539 2 30V22.68C2 16.6049 6.92487 11.68 13 11.68H14.9231V3Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
