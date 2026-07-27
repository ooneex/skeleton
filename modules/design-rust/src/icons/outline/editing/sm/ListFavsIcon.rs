use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ListFavsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ListFavsIcon(props: ListFavsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5.7502 3L6.8881 5.27611L9.5 5.65082L7.60793 7.47081L8.04744 9.99999L5.74991 8.80798L3.45154 10L3.8919 7.4707L2 5.65088L4.61148 5.27611L5.7502 3Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M5.7502 13L6.8881 15.2761L9.5 15.6508L7.60793 17.4708L8.04744 20L5.74991 18.808L3.45154 20L3.8919 17.4707L2 15.6509L4.61148 15.2761L5.7502 13Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M13 7H22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13 17H22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
