use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NoteCodeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NoteCodeIcon(props: NoteCodeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8 3L6 3C4.89543 3 4 3.89543 4 5L4 20C4 21.1046 4.89543 22 6 22L18 22C19.1046 22 20 21.1046 20 20L20 5C20 3.89543 19.1046 3 18 3L16 3",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 5V2C8 1.44772 8.44772 1 9 1H15C15.5523 1 16 1.44772 16 2V5H8Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M14.5 11L17 13.5L14.5 16",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9.50001 11L6.99997 13.5L9.50003 16",
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
