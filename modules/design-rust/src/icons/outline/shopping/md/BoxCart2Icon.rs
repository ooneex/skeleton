use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BoxCart2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BoxCart2Icon(props: BoxCart2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M27 30.0001L23.6667 23.0001L24 23.6999",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 4L16 10L21 10L21 4",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M0.999939 3.00006H3.99994L5.99994 23.0001H27.9999",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M27 4L10 4L10 17C10 18.1046 10.8954 19 12 19L25 19C26.1046 19 27 18.1046 27 17L27 4Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M7.5 31C8.88071 31 10 29.8807 10 28.5C10 27.1193 8.88071 26 7.5 26C6.11929 26 5 27.1193 5 28.5C5 29.8807 6.11929 31 7.5 31Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
