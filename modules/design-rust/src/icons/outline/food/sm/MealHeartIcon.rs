use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MealHeartIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MealHeartIcon(props: MealHeartIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 2V6",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M3 17V15C3 10.0294 7.02944 6 12 6C16.9706 6 21 10.0294 21 15V17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3 21L21 21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15.5 12.8983C15.5 14.6909 12.7764 16.6469 12 17C11.2236 16.6469 8.5 14.6909 8.5 12.8983C8.5 11.8497 9.34408 11 10.3847 11C11.0409 11 11.5394 11.397 11.9461 11.858H12.0539C12.4606 11.397 12.9591 11 13.6152 11C14.6559 11 15.5 11.8497 15.5 12.8983Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M9 2H15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
