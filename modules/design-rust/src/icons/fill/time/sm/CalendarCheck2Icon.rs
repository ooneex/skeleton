use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CalendarCheck2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CalendarCheck2Icon(props: CalendarCheck2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "6",
                width: "2",
                height: "5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "16",
                width: "2",
                height: "5",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m20,3H4c-1.654,0-3,1.346-3,3v12c0,1.654,1.346,3,3,3h1.144v-2h-1.144c-.552,0-1-.448-1-1v-9h18v9c0,.552-.448,1-1,1h-3.344v2h3.344c1.654,0,3-1.346,3-3V6c0-1.654-1.346-3-3-3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "10.5 22.914 6.586 19 8 17.586 10.5 20.086 17 13.586 18.414 15 10.5 22.914",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
