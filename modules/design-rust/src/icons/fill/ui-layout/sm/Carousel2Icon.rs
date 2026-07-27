use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Carousel2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Carousel2Icon(props: Carousel2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "23 20.618 17.553 17.895 18.447 16.105 21 17.382 21 6.618 18.447 7.895 17.553 6.105 23 3.382 23 20.618",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            polygon {
                points: "1 20.618 1 3.382 6.447 6.105 5.553 7.895 3 6.618 3 17.382 5.553 16.105 6.447 17.895 1 20.618",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "5",
                y: "2",
                width: "14",
                height: "20",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
