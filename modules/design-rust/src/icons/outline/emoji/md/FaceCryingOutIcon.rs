use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FaceCryingOutIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FaceCryingOutIcon(props: FaceCryingOutIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 16C24.9089 16.8333 25.75 18.0833 25.75 19.1571C25.75 20.2899 24.9664 21 24 21C23.0336 21 22.25 20.2899 22.25 19.1571C22.25 18.0833 23.1004 16.8333 24 16Z",
                fill: "currentColor",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M8 16C8.90891 16.8333 9.75 18.0833 9.75 19.1571C9.75 20.2899 8.96644 21 8 21C7.03356 21 6.25 20.2899 6.25 19.1571C6.25 18.0833 7.10041 16.8333 8 16Z",
                fill: "currentColor",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M19 13H23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9 13H13",
                stroke: "currentColor",
                stroke_width: "2",
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
            path {
                d: "M16 25C17.6569 25 19 23.433 19 21.5C19 19.567 17.6569 18 16 18C14.3431 18 13 19.567 13 21.5C13 23.433 14.3431 25 16 25Z",
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
