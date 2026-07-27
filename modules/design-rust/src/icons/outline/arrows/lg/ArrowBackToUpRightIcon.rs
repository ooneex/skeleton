use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowBackToUpRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowBackToUpRightIcon(props: ArrowBackToUpRightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M43 29.95L43 38C43 40.7614 40.7614 43 38 43L10 43C7.23857 43 5 40.7614 5 38L5 19C5 16.2386 7.23858 14 10 14L42 14L41.2692 14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M32 24L42 14L32 4",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
