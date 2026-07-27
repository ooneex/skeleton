use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FireIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FireIcon(props: FireIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M38.9344 25.5623L3.5 38L7 45L13 42L18.5 43.5L20 42L17.5 40L40.3119 29.8122L38.9344 25.5623Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M10.5 31.0859L7.62251 29.8122L8.99999 25.5623L17.25 28.4415",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M24 37.0615L42 45L44.5 38L31.7805 33.5127",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M15 16.5597C15 15.1179 16.125 8.76219 16.125 8.76219L18.6563 10.1341L24 3C24 3 33 10.1341 33 16.5597C33 22.2596 28.3871 25.5 24 25.5C19.6129 25.5 15 22.2596 15 16.5597Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M28.5 21.1364C28.5 23.5473 26.4862 25.5 24 25.5C21.5138 25.5 19.5 23.5473 19.5 21.1364C19.5 17.1 24 13.5 24 13.5C24 13.5 28.5 17.1 28.5 21.1364Z",
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
