use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BusSideIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BusSideIcon(props: BusSideIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10.5 9V3",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M22 7V8H24V7H22ZM18.7827 6H22V4H18.7827V6ZM22 6V7H24V6H22ZM18.7827 6H19.2827V4H18.7827V6ZM22 6H24C24 4.89543 23.1046 4 22 4V6Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M3 19V14H7V19",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M3 9H11.0809L14 12H20.5H20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M3 19H11H10",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3 3H14.7686C16.9753 3 18.9128 4.46773 19.5103 6.59207V6.59207C20.3297 9.50573 20.6051 12.5455 20.3226 15.559L20.085 18.0933C20.0368 18.6072 19.6055 19 19.0894 19H17H17.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M14 22C15.6569 22 17 20.6569 17 19C17 17.3431 15.6569 16 14 16C12.3431 16 11 17.3431 11 19C11 20.6569 12.3431 22 14 22Z",
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
