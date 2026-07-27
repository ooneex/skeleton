use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NailPolishIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NailPolishIcon(props: NailPolishIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 13V3C12 2.44772 12.4477 2 13 2H19C19.5523 2 20 2.44771 20 3V13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21 30H11C9.34315 30 8 28.6569 8 27V18C8 17.4477 8.44772 17 9 17H23C23.5523 17 24 17.4477 24 18V27C24 28.6569 22.6569 30 21 30Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12.5 21H19.5L18.5 26H13.5L12.5 21Z",
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
