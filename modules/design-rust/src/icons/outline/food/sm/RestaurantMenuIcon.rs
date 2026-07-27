use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RestaurantMenuIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RestaurantMenuIcon(props: RestaurantMenuIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M23 5V19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14 17L9 17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M8.5 9.5C8.5 11.1569 9.84315 12.5 11.5 12.5C13.1569 12.5 14.5 11.1569 14.5 9.5C14.5 7.84315 13.1569 6.5 11.5 6.5C9.84315 6.5 8.5 7.84315 8.5 9.5Z",
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
