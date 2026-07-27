use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsBoldOppositeDirectionXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsBoldOppositeDirectionXIcon(props: ArrowsBoldOppositeDirectionXIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M6 34L18 24.5V30L41 30L41 38L18 38V43.5L6 34Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M42 14L30 4.5V10.0001L7 10V18L30 18.0001L30 23.5L42 14Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
