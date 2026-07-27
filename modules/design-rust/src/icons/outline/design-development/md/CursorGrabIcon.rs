use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CursorGrabIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CursorGrabIcon(props: CursorGrabIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 16V19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21 16V19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M8.4463 13.0001V7.56894C8.4463 5.70583 10.1267 4.29329 11.9621 4.61362L23.9331 6.70294C26.5093 7.15255 28.3038 9.51129 28.0499 12.114L26.5 28H10V25L5.56841 19.3598C4.87625 18.4789 4.5 17.391 4.5 16.2707V13C4.5 11.3431 5.84315 10 7.5 10H8.11655",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
