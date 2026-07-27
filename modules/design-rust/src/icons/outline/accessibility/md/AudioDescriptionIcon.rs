use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AudioDescriptionIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AudioDescriptionIcon(props: AudioDescriptionIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M27 4H5C3.34315 4 2 5.34315 2 7V21C2 22.6569 3.34315 24 5 24H9V30L18 24H27C28.6569 24 30 22.6569 30 21V7C30 5.34315 28.6569 4 27 4Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6.65 18.5H6.5L9.5 9.5H11.75L14.75 18.5H14.6",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M18.5 9.5H22.5C24.156 9.5 25.5 10.844 25.5 12.5V15.5C25.5 17.156 24.156 18.5 22.5 18.5H18.5V9.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M7.5 16.5H7H14H13.5",
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
