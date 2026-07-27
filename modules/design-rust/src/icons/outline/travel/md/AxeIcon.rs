use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AxeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AxeIcon(props: AxeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25 23.5L22.5 26",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M13.6595 17.283L26 29.6235L27.5 28.1234L28.6235 27L17.0026 15.3791",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M9.62353 7.99999L7.24998 5.62645C6.55963 4.9361 5.44035 4.9361 4.75 5.62645V5.62645C4.05964 6.3168 4.05964 7.43608 4.74999 8.12644L7.824 11.2004",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M23 11.9699L10.6015 19L8.30074 16.6993L5.99998 14.3985L13.0301 2C14.3393 2 15.6358 2.25788 16.8454 2.75892C18.055 3.25995 19.1541 3.99433 20.0799 4.92012C21.0057 5.84592 21.74 6.94499 22.2411 8.1546C22.7421 9.36421 23 10.6607 23 11.9699Z",
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
