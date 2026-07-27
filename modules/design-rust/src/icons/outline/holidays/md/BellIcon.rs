use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BellIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BellIcon(props: BellIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m13.171,28c.412,1.165,1.523,2,2.829,2s2.417-.835,2.829-2",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            path {
                d: "m29,25c-2.209,0-4-1.791-4-4v-10c0-4.971-4.029-9-9-9h0c-4.971,0-9,4.029-9,9v10c0,2.209-1.791,4-4,4h26Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
