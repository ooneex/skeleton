use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PillIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PillIcon(props: PillIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 45C35.598 45 45 35.598 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 35.598 12.402 45 24 45Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13.3934 17.6361L30.364 34.6066C31.5355 35.7782 33.435 35.7782 34.6066 34.6066C35.7782 33.4351 35.7782 31.5356 34.6066 30.364L17.636 13.3935C16.4645 12.2219 14.565 12.2219 13.3934 13.3935C12.2218 14.565 12.2218 16.4645 13.3934 17.6361Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
