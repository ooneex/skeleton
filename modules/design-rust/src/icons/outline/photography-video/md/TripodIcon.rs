use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TripodIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TripodIcon(props: TripodIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M6.5 30L16 18.6667L25.5 30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 28V18.0056V18.6667",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M25 16L25 6.28571C25 5.18114 24.1046 4.28571 23 4.28571L20.5 4.28571L19 2L13 2L11.5 4.28571L9 4.28571C7.89543 4.28571 7 5.18114 7 6.28571L7 16C7 17.1046 7.89543 18 9 18L23 18C24.1046 18 25 17.1046 25 16Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 14C17.933 14 19.5 12.433 19.5 10.5C19.5 8.567 17.933 7 16 7C14.067 7 12.5 8.567 12.5 10.5C12.5 12.433 14.067 14 16 14Z",
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
