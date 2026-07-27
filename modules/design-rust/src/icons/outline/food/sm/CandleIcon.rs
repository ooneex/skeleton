use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CandleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CandleIcon(props: CandleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9 22L9 10H15V22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M5 21L5.70711 21.7071C5.89464 21.8946 6.149 22 6.41421 22H17.5858C17.851 22 18.1054 21.8946 18.2929 21.7071L19 21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12 8C13.3808 8 14.5 6.95525 14.5 5.66638C14.5 4 12 2 12 2C12 2 9.5 4 9.5 5.66638C9.5 6.95438 10.6192 8 12 8Z",
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
