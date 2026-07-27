use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Language2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Language2Icon(props: Language2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2 22V20.5736H4.36591C5.31656 20.5308 6.1054 19.8241 6.25204 18.8838L6.71532 15.9132L8.47272 15.2107C8.75245 15.0989 8.87052 14.767 8.72422 14.5036L6.49998 10.5L6.25945 8.45545C5.93151 5.668 4.06305 3.40053 2 2.46384V2.70107",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M23 19L23 11C23 10.4477 22.5523 10 22 10L14 10C13.4477 10 13 10.4477 13 11L13 17L11 19L11 20L22 20C22.5523 20 23 19.5523 23 19Z",
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
