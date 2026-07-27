use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NumberEightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NumberEightIcon(props: NumberEightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M35 32V31C35 24.9249 30.0751 20 24 20C17.9249 20 13 24.9249 13 31V32C13 38.0751 17.9249 43 24 43C30.0751 43 35 38.0751 35 32Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M31 13V12C31 8.13401 27.866 5 24 5C20.134 5 17 8.13401 17 12V13C17 16.866 20.134 20 24 20C27.866 20 31 16.866 31 13Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
