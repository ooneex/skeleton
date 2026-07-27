use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArchiveFileCheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArchiveFileCheckIcon(props: ArchiveFileCheckIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14 23H18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M6 29L26 29C27.6569 29 29 27.6569 29 26V19H3V26C3 27.6569 4.34315 29 6 29Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6 15V10.0751C6 9.29409 6.30458 8.54386 6.84902 7.98387L11.7831 2.90877C12.348 2.32778 13.1238 2 13.9341 2H23C24.6569 2 26 3.34315 26 5V15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M11.5 10.5L14.5 13.5L20.5 7.5",
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
