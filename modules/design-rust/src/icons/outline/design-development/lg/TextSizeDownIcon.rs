use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextSizeDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextSizeDownIcon(props: TextSizeDownIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8 28H21",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M5.0889 37H5L13.9062 10H14.5H15.0938L24 37H23.9078",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M42.9698 30.6901C40.9609 34.9264 36.8721 36.9363 33.057 36.9991C30.376 37.0432 27.6011 35.5054 27.0784 32.7957C26.6298 30.47 28.1006 27.7263 31.6188 26.7912C35.4507 25.7727 43 26.0286 43 26.0286",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M43 37V24C43 20.134 39.866 17 36 17H35.1395C33.4383 17 31.7953 17.6195 30.5177 18.7427L29 20.0769",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
