use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BadgeCheck2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BadgeCheck2Icon(props: BadgeCheck2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polyline {
                points: "8.5 12.5 10.5 14.5 15.5 9.5",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            polygon {
                points: "19 14.899 21.899 12 19 9.101 19 5 14.899 5 12 2.101 9.101 5 5 5 5 9.101 2.101 12 5 14.899 5 19 9.101 19 12 21.899 14.899 19 19 19 19 14.899",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
