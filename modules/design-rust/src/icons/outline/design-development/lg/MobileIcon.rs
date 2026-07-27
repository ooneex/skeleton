use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MobileIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MobileIcon(props: MobileIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20 40L28 40",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 45L32 45C34.7614 45 37 42.7614 37 40L37 8.00001C37 5.23858 34.7614 3.00001 32 3.00001L16 3.00001C13.2386 3.00001 11 5.23858 11 8.00001L11 40C11 42.7614 13.2386 45 16 45Z",
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
