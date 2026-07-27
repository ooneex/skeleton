use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ListCheckbox2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ListCheckbox2Icon(props: ListCheckbox2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "5 21.414 1.336 17.75 2.75 16.336 5 18.586 10.5 13.086 11.914 14.5 5 21.414",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "14",
                y: "6",
                width: "9",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "14",
                y: "16",
                width: "9",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            polygon {
                points: "5 11.414 1.336 7.75 2.75 6.336 5 8.586 10.5 3.086 11.914 4.5 5 11.414",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
