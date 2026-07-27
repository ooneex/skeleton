use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FileCloudIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FileCloudIcon(props: FileCloudIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13 2V11H4",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M28 15V5C28 3.34315 26.6569 2 25 2H13.2426C12.447 2 11.6839 2.31607 11.1213 2.87868L4.87868 9.12132C4.31607 9.68393 4 10.447 4 11.2426V27C4 28.6569 5.34315 30 7 30H11",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M22.9939 18C20.0549 18.0015 17.5494 20.129 17.0739 23.0265C15.1534 23.264 13.7896 25.0115 14.0268 26.9295C14.243 28.677 15.7255 29.992 17.4883 30H22.9939C26.3108 30 29 27.3135 29 24C29 20.6865 26.3108 18 22.9939 18Z",
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
