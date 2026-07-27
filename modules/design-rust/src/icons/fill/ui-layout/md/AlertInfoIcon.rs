use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AlertInfoIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AlertInfoIcon(props: AlertInfoIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m17,29h-2V11.5c0-.276-.225-.5-.5-.5h-3.5v-2h3.5c1.379,0,2.5,1.122,2.5,2.5v17.5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "16",
                cy: "4",
                r: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
