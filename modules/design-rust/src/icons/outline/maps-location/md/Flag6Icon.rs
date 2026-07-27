use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Flag6IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Flag6Icon(props: Flag6IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16.8039 9.26487L26.0013 6.80044L25.1558 14.1562L29.5659 20.1038L18.0336 23.4292L16.6078 18.1079",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M3.55234 6.58814L15.1434 3.48231L18.7669 17.0053L7.1758 20.1111",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3 5.40479L9.50946 29.4074",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
