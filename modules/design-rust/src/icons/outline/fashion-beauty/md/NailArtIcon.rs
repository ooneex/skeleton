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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M26 29L26 14.4741C26 11.4707 24.499 8.66597 22 6.99999V6.99999V6.33332",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6 29L6 14.4741C6 11.4707 7.50102 8.66597 10 6.99999V6.99999V6.33332",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13 27H19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M10 3.52858C11.8219 2.5275 13.8922 2.00008 16 2C18.1078 2.00008 20.1781 2.5275 22 3.52858V14C22 16.7614 19.7614 19 17 19H15C12.2386 19 10 16.7614 10 14V3.52858Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
