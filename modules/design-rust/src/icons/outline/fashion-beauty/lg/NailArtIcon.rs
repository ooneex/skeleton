use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NailArtIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NailArtIcon(props: NailArtIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M38 45V17.6859C38 14.7491 36.5671 11.997 34.1612 10.3128L33 9.5V8.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M10 45V17.6859C10 14.7491 11.4329 11.997 13.8388 10.3128L15 9.5V8.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M19 43H29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M19 38H29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15 19.5L15 6.17957L16.2342 5.35677C20.9368 2.22171 27.0632 2.22171 31.7658 5.35677L33 6.17957L33 19.5C33 23.366 29.866 26.5 26 26.5H22C18.134 26.5 15 23.366 15 19.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
