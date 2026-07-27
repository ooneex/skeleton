use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Clone2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Clone2Icon(props: Clone2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M33 15V10C33 7.23858 30.7614 5 28 5L10 5C7.23858 5 5 7.23858 5 10V28C5 30.7614 7.23858 33 10 33H15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M38 15H20C17.2386 15 15 17.2386 15 20V38C15 40.7614 17.2386 43 20 43H38C40.7614 43 43 40.7614 43 38V20C43 17.2386 40.7614 15 38 15Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
