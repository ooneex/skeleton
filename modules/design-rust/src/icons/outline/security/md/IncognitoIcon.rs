use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct IncognitoIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn IncognitoIcon(props: IncognitoIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "3 15 29 15 25 10 7 10 3 15",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-cap": "butt",
            }
            path {
                d: "m7,10l1.432-5.728c.334-1.336,1.534-2.272,2.91-2.272h9.315c1.377,0,2.577.937,2.91,2.272l1.432,5.728",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-cap": "butt",
            }
            circle {
                cx: "24",
                cy: "25",
                r: "5",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            circle {
                cx: "8",
                cy: "25",
                r: "5",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            path {
                d: "m19.32,23.287c-1.881-1.716-4.759-1.716-6.64,0",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
        }
    }
}
