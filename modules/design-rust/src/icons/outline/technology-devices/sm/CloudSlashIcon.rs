use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CloudSlashIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CloudSlashIcon(props: CloudSlashIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m10.657,19h8.343c2.209,0,4-1.791,4-4s-1.791-4-4-4",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m17.276,6.724c-1.373-1.664-3.449-2.724-5.776-2.724-4.019,0-7.29,3.164-7.482,7.136-1.732.44-3.018,1.996-3.018,3.864,0,2.209,1.791,4,4,4",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-cap": "butt",
            }
            line {
                x1: "22",
                y1: "2",
                x2: "2",
                y2: "22",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}
