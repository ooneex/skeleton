use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MilitaryMedalIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MilitaryMedalIcon(props: MilitaryMedalIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7 5H17",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M12 13L13.39 15.798L16.5 16.247L14.25 18.425L14.781 21.5L12 20.048L9.218 21.5L9.75 18.425L7.5 16.247L10.609 15.798L12 13Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17 8.14286L12 11L7 8.14286V1H17V8.14286Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
