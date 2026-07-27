use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PersonRoofIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PersonRoofIcon(props: PersonRoofIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "12 .882 .658 6.553 1.553 8.342 12 3.118 22.447 8.342 23.342 6.553 12 .882",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "12",
                cy: "9.25",
                r: "3.25",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m12,14c-3.86,0-7,3.14-7,7v1h14v-1c0-3.86-3.14-7-7-7Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
