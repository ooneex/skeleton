use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Link3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Link3Icon(props: Link3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m4,15h0c-1.105,0-2-.895-2-2v-7c0-1.105.895-2,2-2h10c1.105,0,2,.895,2,2v7c0,1.105-.895,2-2,2h-2",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m20,9h0c1.105,0,2,.895,2,2v7c0,1.105-.895,2-2,2h-10c-1.105,0-2-.895-2-2v-7c0-1.105.895-2,2-2h2",
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
