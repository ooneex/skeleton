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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M42 34.2155L47 36.2155V11.7844L42 13.7844V34.2155Z",
                fill: "currentColor",
            }
            path {
                d: "M6 34.2155L1 36.2155V11.7844L6 13.7844V34.2155Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11 4H37V44H11V4Z",
                fill: "currentColor",
            }
            path {
                d: "M40 39.6156L44 41.2156V6.78445L40 8.38445V39.6156Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M8 39.6156L4 41.2156V6.78445L8 8.38445V39.6156Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
