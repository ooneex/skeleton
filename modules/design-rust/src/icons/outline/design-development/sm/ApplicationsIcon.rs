use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ApplicationsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ApplicationsIcon(props: ApplicationsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m2,13h16v6.5c0,.828-.672,1.5-1.5,1.5H3.5c-.828,0-1.5-.672-1.5-1.5V6.5c0-.828.672-1.5,1.5-1.5h6.5v16",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m22,9V2.5c0-.828-.672-1.5-1.5-1.5h-6.5v8h8Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}
