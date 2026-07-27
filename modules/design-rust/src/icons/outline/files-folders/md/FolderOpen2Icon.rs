use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FolderOpen2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FolderOpen2Icon(props: FolderOpen2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2 26.2834V7C2 5.34314 3.34315 4 5 4H11.7222L15.8889 7H25C26.6569 7 28 8.34315 28 10V13.0373",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M22.9319 28L3.99431 28C2.60567 28 1.63964 26.6196 2.1153 25.3149L6.60519 13H30.5001L25.7504 26.0276C25.3186 27.2119 24.1925 28 22.9319 28Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
