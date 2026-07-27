use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct IdBadge3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn IdBadge3Icon(props: IdBadge3IconProps) -> Element {
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
                y: "10",
                width: "5",
                height: "5",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "15",
                y1: "10",
                x2: "18",
                y2: "10",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "15",
                y1: "15",
                x2: "18",
                y2: "15",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m20,4h-2c0,1.105-.895,2-2,2h0c-1.105,0-2-.895-2-2h0s-4,0-4,0h0c0,1.105-.895,2-2,2h0c-1.105,0-2-.895-2-2h0s-2,0-2,0c-1.105,0-2,.895-2,2v12c0,1.105.895,2,2,2h16c1.105,0,2-.895,2-2V6c0-1.105-.895-2-2-2Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
