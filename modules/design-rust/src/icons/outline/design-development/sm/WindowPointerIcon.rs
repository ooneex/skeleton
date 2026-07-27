use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WindowPointerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WindowPointerIcon(props: WindowPointerIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2 8H22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M2 10L2 6C2 4.89543 2.89543 4 4 4L20 4C21.1046 4 22 4.89543 22 6L22 18C22 19.1046 21.1046 20 20 20L13 20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8.49996 11L6.32736 11C5.75648 11 5.21158 11.2303 4.82436 11.6353L2.36363 13.6331L1 13.6331L1 21.2033L7.75427 21.9858C8.76802 22.1033 9.71622 21.4809 9.97606 20.5276L11.2273 16L14.75 16C15.4404 16 16 15.4404 16 14.75C16 14.0596 15.4404 13.5 14.75 13.5L6.4546 13.5L6.4546 12.5L9.86359 12.3714L9.86359 12.3166C9.86359 11.5894 9.25307 11 8.49996 11Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
        }
    }
}
