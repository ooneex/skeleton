use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Link7SlashIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Link7SlashIcon(props: Link7SlashIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14 19V14C14 8.47715 18.4772 4 24 4V4C29.2851 4 33.6126 8.09995 33.9754 13.2928C33.9936 13.5531 34.3155 13.6845 34.5 13.5V13.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M34 29V34C34 39.5228 29.5228 44 24 44V44C20.509 44 17.4358 42.2111 15.647 39.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 18V24V23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6 42L42 6",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
