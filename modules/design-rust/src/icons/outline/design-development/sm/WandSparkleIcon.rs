use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WandSparkleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WandSparkleIcon(props: WandSparkleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M1.73999 18.7279L5.2755 22.2635L18.0034 9.53553L14.4679 6L1.73999 18.7279Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M10.5 10L14 13.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M21.1 2.9L20.05 0.45L19 2.9L16.55 3.95L19 5L20.05 7.45L21.1 5L23.55 3.95L21.1 2.9Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M21.1 14L20.05 11.55L19 14L16.55 15.05L19 16.1L20.05 18.55L21.1 16.1L23.55 15.05L21.1 14Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M10 2.9L8.95 0.450001L7.9 2.9L5.45 3.95L7.9 5L8.95 7.45L10 5L12.45 3.95L10 2.9Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
        }
    }
}
