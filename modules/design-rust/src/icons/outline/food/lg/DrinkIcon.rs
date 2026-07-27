use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DrinkIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DrinkIcon(props: DrinkIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M36 8V4V4.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M41 13H45H44.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 3H20L24.0282 27.6352L23.9767 27.3203",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12 27.1393C17.0286 29.5634 19.7475 29.5501 24 27.5C28.2525 25.45 30.9714 25.4365 36 27.8607",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M36 22C40.9706 22 45 17.9706 45 13C45 8.02944 40.9706 4 36 4C31.0294 4 27 8.02944 27 13",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M12 13V40C12 42.7614 14.2386 45 17 45H31C33.7614 45 36 42.7614 36 40V13H12Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
