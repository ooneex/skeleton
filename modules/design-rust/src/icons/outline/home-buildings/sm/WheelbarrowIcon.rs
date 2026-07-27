use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WheelbarrowIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WheelbarrowIcon(props: WheelbarrowIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19.5 6H3.59314C2.75246 6 2.28696 6.97434 2.8152 7.62834L11.4605 18.332C11.8017 18.7545 12.3156 19 12.8587 19V19C13.7882 19 14.5644 18.2912 14.6486 17.3654L15 13.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M22.972 2.99999L20.0001 2.99999L19.0714 12.0209L5.48187 17.415L5.8638 17.2634",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3.5 21C4.88071 21 6 19.8807 6 18.5C6 17.1193 4.88071 16 3.5 16C2.11929 16 1 17.1193 1 18.5C1 19.8807 2.11929 21 3.5 21Z",
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
