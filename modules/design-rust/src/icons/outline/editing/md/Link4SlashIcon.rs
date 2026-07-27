use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Link4SlashIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Link4SlashIcon(props: Link4SlashIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m12,8h-3c-4.418,0-8,3.582-8,8h0c0,4.099,3.082,7.477,7.055,7.945l.736-.736",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m20,8h3c.319,0,.634.019.943.055l-.819.819",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m20,24h3c4.418,0,8-3.582,8-8h0c0-2.551-1.194-4.824-3.054-6.289",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "2",
                y1: "30",
                x2: "30",
                y2: "2",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            polyline {
                points: "9 16 16 16 15.437 16.562",
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
