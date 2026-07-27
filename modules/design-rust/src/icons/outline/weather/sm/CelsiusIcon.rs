use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CelsiusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CelsiusIcon(props: CelsiusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4 5C5.10457 5 6 4.10457 6 3C6 1.89543 5.10457 1 4 1C2.89543 1 2 1.89543 2 3C2 4.10457 2.89543 5 4 5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M19 6.59941C17.7465 5.59511 16.1884 5 14.5 5C10.3579 5 7 8.58172 7 13C7 17.4183 10.3579 21 14.5 21C16.1884 21 17.7465 20.4049 19 19.4006",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
