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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M30 38H34.5H34",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M30 26L35.2176 26H34.7176",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M30 32.0001H34.8401H34.3401",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12.5 19H35.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M12.5751 19.1345L15 45H34L35.6283 18.9466C35.8537 15.3414 33.9017 11.9508 30.6708 10.3354L30 10L28 3H20L18 10L17.5109 10.2446C14.1889 11.9055 12.2284 15.4366 12.5751 19.1345Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
