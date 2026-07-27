use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UserFeatherIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UserFeatherIcon(props: UserFeatherIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 19C28.1421 19 31.5 15.6421 31.5 11.5C31.5 7.35786 28.1421 4 24 4C19.8579 4 16.5 7.35786 16.5 11.5C16.5 15.6421 19.8579 19 24 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M37.5 33.3207L33.4333 40.3207",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M31.3999 43.8206L33.4146 40.3527C28.1311 34.6005 31.6025 27.7769 43.4207 23C44.677 31.9435 42.9508 37.7778 39.1264 39.8148",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M26 42.9739C19.3332 43.1477 12.6662 42.4528 6 40.8894C6 31.5622 14.0595 24 24 24C26.2919 24 28.4838 24.402 30.5 25.1349",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
