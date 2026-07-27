use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShareRight2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShareRight2Icon(props: ShareRight2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M44.5 18.5L29.4412 5V12.7143C19.6369 12.7143 12.5 16.4104 12.5 32C16.0294 27.2586 19.4016 24.2057 29.4412 24.2857V32L44.5 18.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M23.5 5L10 5C7.23858 5 5 7.23858 5 10V38C5 40.7614 7.23858 43 10 43H38C40.7614 43 43 40.7614 43 38V28.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
