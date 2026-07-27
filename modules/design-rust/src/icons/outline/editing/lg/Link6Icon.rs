use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Link6IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Link6Icon(props: Link6IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M32 9.05691L30.1887 8.45283C30.1887 8.45283 24.7547 6.64151 21.1321 10.2642L10.2642 21.1321C6.64151 24.7547 8.45283 30.1887 8.45283 30.1887L9.05691 32",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M38.9431 16L39.5472 17.8113C39.5472 17.8113 41.3585 23.2453 37.7358 26.8679L26.8679 37.7358C23.2453 41.3585 17.8113 39.5472 17.8113 39.5472L16 38.9431",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M18 30L8 40",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M40 8L30 18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
