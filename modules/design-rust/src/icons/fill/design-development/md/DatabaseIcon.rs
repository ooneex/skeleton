use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DatabaseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DatabaseIcon(props: DatabaseIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            ellipse {
                cx: "16",
                cy: "6",
                rx: "13",
                ry: "5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m16,21c6.46,0,13-1.717,13-5v-6.163c-2.828,2.274-8.191,3.163-13,3.163s-10.172-.889-13-3.163v6.163c0,3.283,6.54,5,13,5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m16,23c-4.809,0-10.172-.889-13-3.163v6.163c0,3.283,6.54,5,13,5s13-1.717,13-5v-6.163c-2.828,2.274-8.191,3.163-13,3.163Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
