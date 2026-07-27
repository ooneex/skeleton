use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RotateImageClockwiseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RotateImageClockwiseIcon(props: RotateImageClockwiseIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M36 14L13 14C10.2386 14 8 16.2386 8 19L8 36C8 38.7614 10.2386 41 13 41H36C38.7614 41 41 38.7614 41 36V19C41 16.2386 38.7614 14 36 14Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17.5 27C19.433 27 21 25.433 21 23.5C21 21.567 19.433 20 17.5 20C15.567 20 14 21.567 14 23.5C14 25.433 15.567 27 17.5 27Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15.5 3L21.5 9C20.8754 9 14.9714 9 9.99851 9C6.13251 9 3 12.134 3 16V20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14 41L30 23L41 34",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
        }
    }
}
