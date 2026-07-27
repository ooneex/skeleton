use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BabyBottle2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BabyBottle2Icon(props: BabyBottle2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13 25H15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13 21H15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13 17H15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M23 13.9933V27C23 28.6569 21.6569 30 20 30L12 30C10.3431 30 9 28.6569 9 27L9.00002 13.9934",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M18.5 5.49998L21.2716 5.75195C22.8168 5.89243 24 7.18802 24 8.73963V9.99999H8V8.73963C8 7.18802 9.18315 5.89243 10.7284 5.75195L13.5 5.49998L14.1746 2.46427C14.3647 1.60871 15.1236 0.999991 16 0.999989C16.8764 0.999985 17.6353 1.60871 17.8254 2.46427L18.5 5.49998Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
