use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SimCardIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SimCardIcon(props: SimCardIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M6 21L18 21C19.1046 21 20 20.1046 20 19L20 5C20 3.89543 19.1046 3 18 3L10.5288 3C10.0066 3 9.50513 3.20424 9.13152 3.56908L4.6027 7.99147C4.2173 8.36781 4 8.88372 4 9.42239L4 19C4 20.1046 4.89543 21 6 21Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9 16L9 12L11 12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M15 12L15 16L13 16",
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
