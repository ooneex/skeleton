use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShareAllLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShareAllLeftIcon(props: ShareAllLeftIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15 23.9999L32.8095 7.72931V18.5763L33.0001 18.5763C39.6275 18.5764 45 23.9489 45 30.5763V42V41.4234C45 34.796 39.6275 29.4234 33.0001 29.4234L32.8095 29.4234V40.2705L15 23.9999Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21.8095 7.72925L4 23.9999L21.8095 40.2705",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
