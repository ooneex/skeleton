use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GymnasticsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GymnasticsIcon(props: GymnasticsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14 22.2421L14 22L12.5 16L3.00002 13L4.00002 10.5L12.8902 11.3467C13.8291 11.4361 14.7029 10.8574 14.987 9.95795L17.5 1.99999L20.5 1.99999L19 12.5L20 19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M20.5 23.5C19.1193 23.5 18 24.6193 18 26C18 27.3807 19.1193 28.5 20.5 28.5C21.8807 28.5 23 27.3807 23 26C23 24.6193 21.8807 23.5 20.5 23.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M26.9999 16L14 22L14 30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
