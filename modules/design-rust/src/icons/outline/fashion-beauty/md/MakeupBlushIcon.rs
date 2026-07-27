use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MakeupBlushIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MakeupBlushIcon(props: MakeupBlushIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14.5 6.11175C9.68874 6.83548 6 10.987 6 16C6 21.5228 10.4772 26 16 26C21.0885 26 25.2894 22.1993 25.9186 17.2819",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M29.1607 11.2142C29.7038 12.7074 30 14.3191 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2C17.6997 2 19.3287 2.30291 20.8359 2.85769",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M23.8136 10.6653L24 10.5L29.3475 5.53683C30.1966 4.74876 30.2212 3.41312 29.4018 2.59425V2.59425V2.59425C28.5835 1.7765 27.2489 1.805 26.4663 2.65694L21.5428 8.01657L21.3687 8.21256",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14 10.5851C14 12.8794 14.2898 14.5366 15.8914 16.1589C17.493 17.7812 19.0552 18 21.3202 18L24.0851 10.9412L21.0813 7.93225L14 10.5851Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                fill: "none",
            }
        }
    }
}
