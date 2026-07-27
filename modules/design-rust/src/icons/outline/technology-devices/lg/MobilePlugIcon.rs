use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MobilePlugIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MobilePlugIcon(props: MobilePlugIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M33 43V46",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M29 30L29 24",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M37 30L37 24",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M25 30L25 35C25 39.4183 28.5817 43 33 43C37.4183 43 41 39.4183 41 35L41 30L25 30Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M32.25 35.75C32.25 36.1642 32.5858 36.5 33 36.5C33.4142 36.5 33.75 36.1642 33.75 35.75C33.75 35.3358 33.4142 35 33 35C32.5858 35 32.25 35.3358 32.25 35.75Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
            }
            path {
                d: "M24.5 45L16 45C13.2386 45 11 42.7614 11 40L11 8C11 5.23858 13.2386 3 16 3L32 3C34.7614 3 37 5.23858 37 8L37 19",
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
