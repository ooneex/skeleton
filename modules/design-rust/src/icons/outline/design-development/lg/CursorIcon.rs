use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CursorIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CursorIcon(props: CursorIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8.00012 7.99991L33 14L26.2463 20.5894L40.6571 35.0002L35.0002 40.657L20.5895 26.2462L13.9999 32.9999L8.00012 7.99991Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
