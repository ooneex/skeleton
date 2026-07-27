use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CocktailShakerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CocktailShakerIcon(props: CocktailShakerIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8 14L24 14",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M20 25H23H22.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21 20L23.5 20H23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M7.81012 12.2563L9.5 30H22.5L24.1899 12.2563C24.3783 10.2783 23.3775 8.37641 21.6406 7.41145L20 6.5L18.5 2H13.5L12 6.5L10.3594 7.41145C8.62246 8.37641 7.62174 10.2783 7.81012 12.2563Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
