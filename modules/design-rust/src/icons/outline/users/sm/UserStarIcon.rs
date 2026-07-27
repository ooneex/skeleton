use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UserStarIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UserStarIcon(props: UserStarIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "11",
                cy: "6",
                r: "4",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m11.331,13.017c-.111-.005-.219-.017-.331-.017-4.418,0-8,3.582-8,8,2.492.623,4.983.943,7.475.984",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            polygon {
                points: "17.25 13.5 18.641 16.298 21.75 16.747 19.5 18.925 20.031 22 17.25 20.548 14.469 22 15 18.925 12.75 16.747 15.859 16.298 17.25 13.5",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}
