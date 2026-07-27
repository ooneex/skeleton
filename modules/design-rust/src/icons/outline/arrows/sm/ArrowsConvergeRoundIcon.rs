use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsConvergeRoundIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsConvergeRoundIcon(props: ArrowsConvergeRoundIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14.5 7L14 7L16.5 7C20.0899 7 23 9.91015 23 13.5V13.5C23 17.0899 20.0899 20 16.5 20L7.5 20C3.91015 20 1 17.0898 1 13.5V13.5C1 9.91015 3.91015 7 7.5 7L10 7L9.5 7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M6.5 3.5L10 7L6.5 10.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17.5 3.5L14 7L17.5 10.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
