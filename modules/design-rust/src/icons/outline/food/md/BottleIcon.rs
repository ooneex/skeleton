use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BottleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BottleIcon(props: BottleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13 7H19",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M8 18H24",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M8 25H24",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M18.59 1.9005L19.5 11L21.6246 11.9442C23.0691 12.5863 24 14.0187 24 15.5995V31H8V15.5995C8 14.0187 8.93093 12.5863 10.3754 11.9442L12.5 11L13.41 1.9005C13.4611 1.38929 13.8912 1 14.405 1H17.595C18.1088 1 18.5389 1.3893 18.59 1.9005Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
