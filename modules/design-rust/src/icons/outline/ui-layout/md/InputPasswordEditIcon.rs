use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct InputPasswordEditIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn InputPasswordEditIcon(props: InputPasswordEditIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M30 10V9C30 7.34315 28.6569 6 27 6H5C3.34315 6 2 7.34315 2 9V19C2 20.6569 3.34315 22 5 22H14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M7.5 14C7.5 13.1716 8.17157 12.5 9 12.5C9.82843 12.5 10.5 13.1716 10.5 14C10.5 14.8284 9.82843 15.5 9 15.5C8.17157 15.5 7.5 14.8284 7.5 14Z",
                fill: "currentColor",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            path {
                d: "M14.5 14C14.5 13.1716 15.1716 12.5 16 12.5C16.8284 12.5 17.5 13.1716 17.5 14C17.5 14.8284 16.8284 15.5 16 15.5C15.1716 15.5 14.5 14.8284 14.5 14Z",
                fill: "currentColor",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            path {
                d: "M21.9298 26.6662L30.2022 18.3939C31.1952 17.4009 31.1952 15.7909 30.2022 14.7979C29.2092 13.8049 27.5992 13.8049 26.6063 14.7979L18.3338 23.0702L18 26.9999L21.9298 26.6662Z",
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
