use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MoonFogIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MoonFogIcon(props: MoonFogIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4.20596 9C4.98062 5.42689 7.86068 2.63873 11.4819 2C10.7589 3.30225 10.3472 4.80122 10.3472 6.39637C10.3472 11.4051 14.4068 15.4655 19.4145 15.4655C19.9554 15.4655 20.4852 15.4181 21 15.3273C20.0916 16.9635 18.6918 18.2892 17 19.1049",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                stroke_linejoin: "bevel",
                fill: "none",
            }
            path {
                d: "M19.85 5.15L18.5 2L17.15 5.15L14 6.5L17.15 7.85L18.5 11L19.85 7.85L23 6.5L19.85 5.15Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M1 17L9 17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9 21H13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M3 13L5 13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M4 21H5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
