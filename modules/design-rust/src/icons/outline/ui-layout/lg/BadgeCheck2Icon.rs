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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14 26L20 32L33.5 15.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M38.85 30.15L45 24L38.85 17.85V9.15001H30.15L24 3L17.85 9.15001H9.15001V17.85L3 24L9.15001 30.15V38.85H17.85L24 45L30.15 38.85H38.85V30.15Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
