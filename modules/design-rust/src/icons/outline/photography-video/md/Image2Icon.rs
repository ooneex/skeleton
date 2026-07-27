use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Image2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Image2Icon(props: Image2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2 28L9 17.5L13 23L20.5 10L30 28H2Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8.5 11C10.433 11 12 9.433 12 7.5C12 5.567 10.433 4 8.5 4C6.567 4 5 5.567 5 7.5C5 9.433 6.567 11 8.5 11Z",
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
