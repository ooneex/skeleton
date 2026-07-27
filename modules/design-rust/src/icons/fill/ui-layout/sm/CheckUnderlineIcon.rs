use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CheckUnderlineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CheckUnderlineIcon(props: CheckUnderlineIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "9.034 16.449 3.586 11 5 9.586 8.966 13.551 18.933 2.587 20.413 3.933 9.034 16.449",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2",
                y: "19",
                width: "20",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
