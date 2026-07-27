use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ListTodoIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ListTodoIcon(props: ListTodoIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "17",
                y: "7",
                width: "13",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "5.965 28.996 1.59 23.892 3.108 22.59 6.035 26.004 13.957 17.586 15.414 18.957 5.965 28.996",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2",
                y: "2",
                width: "12",
                height: "12",
                rx: "2.5",
                ry: "2.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "17",
                y: "23",
                width: "13",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
