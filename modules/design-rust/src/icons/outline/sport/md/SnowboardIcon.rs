use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SnowboardIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SnowboardIcon(props: SnowboardIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15.5 8.00005H24V16.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M16.5 23.9999L8 23.9999L8 15.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M28.093 13.2037C30.6109 10.6858 30.6603 6.47419 28.093 3.90697C25.5258 1.33975 21.3142 1.38906 18.7963 3.90697C16.2784 6.42482 14.1479 10.4147 12.2885 12.2741C10.4292 14.1334 6.47805 16.2252 3.92144 18.7818C1.36483 21.3384 1.35422 25.5113 3.92144 28.0786C6.48866 30.6458 10.6616 30.6352 13.2182 28.0786C15.7748 25.5219 17.8666 21.5708 19.7259 19.7115C21.5853 17.8521 25.5752 15.7216 28.093 13.2037Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13.5 17.5L14.5 18.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17.5 13.5L18.5 14.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
