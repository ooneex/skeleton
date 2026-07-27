use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ReservedTagIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ReservedTagIcon(props: ReservedTagIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5 5L3.99999 5L1.42375 16.3897C1.35301 16.7024 1.59078 17 1.91143 17L7 17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M22.8704 18.3952L20 5L4.4375 5L7.26811 18.2095C7.36691 18.6706 7.77438 19 8.24591 19L22.3815 19C22.6998 19 22.9371 18.7065 22.8704 18.3952Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 12L12 12",
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
