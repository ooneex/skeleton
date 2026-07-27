use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PhoneArrowRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PhoneArrowRightIcon(props: PhoneArrowRightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M26 27.0021L28 27.0001L3 27.0001",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21 20L28 27L21 34",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M11 22L11 8C11 5.23858 13.2386 3 16 3L32 3C34.7614 3 37 5.23858 37 8L37 40C37 42.7614 34.7614 45 32 45L16 45C13.2386 45 11 42.7614 11 40L11 32",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M26.5 9L21.5 9C21.2239 9 21 8.77614 21 8.5C21 8.22386 21.2239 8 21.5 8L26.5 8C26.7761 8 27 8.22386 27 8.5C27 8.77614 26.7761 9 26.5 9Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
