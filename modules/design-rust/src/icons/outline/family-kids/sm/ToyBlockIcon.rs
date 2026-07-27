use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ToyBlockIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ToyBlockIcon(props: ToyBlockIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 14.0881V22.4462",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M22 9.44897L12 14.1531L2 9.44897",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M16 6.34695L22 9.46939V17.7959L12 22.5L2 17.7959V9.46939L7.99997 6.34695",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M8 3V7C8 8.10457 9.79086 9 12 9C14.2091 9 16 8.10457 16 7V3",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M12 5C14.2091 5 16 4.10457 16 3C16 1.89543 14.2091 1 12 1C9.79086 1 8 1.89543 8 3C8 4.10457 9.79086 5 12 5Z",
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
