use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ThumbsDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ThumbsDownIcon(props: ThumbsDownIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8 15V3",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M10.5722 21.7435L8.27612 15L3 15L3 3.49999L15.6654 2.23346C17.037 2.0963 18.3255 2.91144 18.7891 4.20954L22.0456 13.3273C22.5108 14.6298 21.5452 16 20.1621 16L14 16L14.1803 21.0801C14.2176 22.1292 13.3771 23 12.3274 23C11.5337 23 10.828 22.4948 10.5722 21.7435Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
