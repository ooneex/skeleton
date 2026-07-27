use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LuggageSearchIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LuggageSearchIcon(props: LuggageSearchIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 7L12 4C12 3.44772 12.4477 3 13 3H19C19.5523 3 20 3.44772 20 4V7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 14V22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M20 14V14.8944",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15.2899 29L9 29C7.34315 29 6 27.6569 6 26L6 10C6 8.34314 7.34315 7 9 7L23 7C24.6569 7 26 8.34315 26 10L26 14.9141",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M22 28C24.7614 28 27 25.7614 27 23C27 20.2386 24.7614 18 22 18C19.2386 18 17 20.2386 17 23C17 25.7614 19.2386 28 22 28Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M28.5 29.5L25.5 26.5L26 27",
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
