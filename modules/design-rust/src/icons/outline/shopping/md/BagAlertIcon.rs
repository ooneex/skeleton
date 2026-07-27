use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BagAlertIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BagAlertIcon(props: BagAlertIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 13V6C11 3.239 13.239 1 16 1C18.761 1 21 3.239 21 6V13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M25.9999 13V9H5.99994V16L3.84792 25.3254C3.41411 27.2053 4.84184 29 6.77109 29H11.9999",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M19 30H17.398C16.327 30 15.655 28.842 16.186 27.912L21.788 18.108C22.324 17.17 23.676 17.17 24.211 18.108L29.813 27.912C30.345 28.842 29.673 30 28.601 30H26.999",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M23 23V26",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M23 31C23.6904 31 24.25 30.4404 24.25 29.75C24.25 29.0596 23.6904 28.5 23 28.5C22.3096 28.5 21.75 29.0596 21.75 29.75C21.75 30.4404 22.3096 31 23 31Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
        }
    }
}
