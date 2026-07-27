use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UserNecktie2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UserNecktie2Icon(props: UserNecktie2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8 29V24V24.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 29V24V24.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M13.5 29L15.5 23H16.5L18.5 29L16 32L13.5 29Z",
                fill: "currentColor",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M2 29V28.9655C2 27.0915 3.24154 25.4442 5.04305 24.928L9.47844 23.6571C11.1012 23.2035 12.22 23.05 12.22 21.3988V19.3462C9.8148 19.1502 8.22737 18.4304 6.64397 16.9772C9.09397 14.2206 9 11.1 9 9C9 5.13401 12.134 2 16 2C19.866 2 23 5.13401 23 9C23 11.1 22.9062 14.2206 25.3562 16.9772C23.7728 18.4304 22.1852 19.304 19.78 19.5V21.3988C19.78 23.05 20.8988 23.2035 22.5216 23.6571L26.9569 24.928C28.7585 25.4442 30 27.0915 30 28.9655V29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
