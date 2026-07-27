use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BucketIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BucketIcon(props: BucketIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3.5 6L5.625 19.3333C5.87874 20.9462 8.79972 22 12 22C15.2003 22 18.1678 20.91 18.375 19.3333L20.5 6",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M12 9C16.6944 9 20.5 7.65685 20.5 6C20.5 4.34315 16.6944 3 12 3C7.30558 3 3.5 4.34315 3.5 6C3.5 7.65685 7.30558 9 12 9Z",
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
