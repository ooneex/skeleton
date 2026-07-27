use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Clone3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Clone3Icon(props: Clone3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15 33L15 38C15 40.7614 17.2386 43 20 43L38 43C40.7614 43 43 40.7614 43 38L43 20C43 17.2386 40.7614 15 38 15L33 15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M10 33L28 33C30.7614 33 33 30.7614 33 28L33 10C33 7.23857 30.7614 5 28 5L10 5C7.23858 5 5 7.23857 5 10L5 28C5 30.7614 7.23857 33 10 33Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
