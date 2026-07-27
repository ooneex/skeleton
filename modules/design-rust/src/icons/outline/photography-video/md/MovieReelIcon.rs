use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MovieReelIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MovieReelIcon(props: MovieReelIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16.9867 30H16H29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 12C17.3807 12 18.5 10.8807 18.5 9.5C18.5 8.11929 17.3807 7 16 7C14.6193 7 13.5 8.11929 13.5 9.5C13.5 10.8807 14.6193 12 16 12Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 25C17.3807 25 18.5 23.8807 18.5 22.5C18.5 21.1193 17.3807 20 16 20C14.6193 20 13.5 21.1193 13.5 22.5C13.5 23.8807 14.6193 25 16 25Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M20 16C20 17.3807 21.1193 18.5 22.5 18.5C23.8807 18.5 25 17.3807 25 16C25 14.6193 23.8807 13.5 22.5 13.5C21.1193 13.5 20 14.6193 20 16Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M7 16C7 17.3807 8.11929 18.5 9.5 18.5C10.8807 18.5 12 17.3807 12 16C12 14.6193 10.8807 13.5 9.5 13.5C8.11929 13.5 7 14.6193 7 16Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
