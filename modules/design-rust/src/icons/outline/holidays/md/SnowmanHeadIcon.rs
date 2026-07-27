use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SnowmanHeadIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SnowmanHeadIcon(props: SnowmanHeadIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "16",
                cy: "16",
                r: "14",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M16.9144 16.6865L24.1083 19.05C25.0255 19.3513 25.0255 20.6487 24.1083 20.95L16.9144 23.3135C15.6378 23.733 14.2337 23.3817 13.305 22.4105C12.0157 21.0621 12.0157 18.9379 13.305 17.5895C14.2337 16.6183 15.6378 16.267 16.9144 16.6865Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            circle {
                cx: "11",
                cy: "11",
                r: "2",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M19 11H22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
