use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HardDriveIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HardDriveIcon(props: HardDriveIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7 14V16H17V14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M4 20L20 20C21.1046 20 22 19.1046 22 18L22 14.1786C22 14.0598 21.9894 13.9412 21.9684 13.8243L20.4962 5.64569C20.3248 4.6931 19.4958 4 18.5279 4L5.47214 4C4.50424 4 3.67524 4.6931 3.50377 5.64569L2.03163 13.8243C2.01059 13.9412 2 14.0598 2 14.1786L2 18C2 19.1046 2.89543 20 4 20Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M22 14H2",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
