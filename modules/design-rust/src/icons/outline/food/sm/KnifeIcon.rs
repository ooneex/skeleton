use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct KnifeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn KnifeIcon(props: KnifeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 18L6.91421 22.0858C6.13317 22.8668 4.86684 22.8668 4.08579 22.0858V22.0858C3.30474 21.3047 3.30474 20.0384 4.08579 19.2574L7.5 15.8431",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M3.40814 11.4497L10.4792 18.5208L22.5 6.49996L19.6716 3.67153C17.3285 1.32839 13.5295 1.32839 11.1863 3.67153L3.40814 11.4497Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M10.7821 13.2596L14.8492 9.19244",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
