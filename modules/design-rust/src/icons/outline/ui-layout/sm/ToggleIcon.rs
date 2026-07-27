use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ToggleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ToggleIcon(props: ToggleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "8",
                cy: "12",
                r: "3",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m8,5h8c3.866,0,7,3.134,7,7h0c0,3.866-3.134,7-7,7h-8c-3.866,0-7-3.134-7-7h0c0-3.866,3.134-7,7-7Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
