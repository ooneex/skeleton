use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VideoIntercomIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VideoIntercomIcon(props: VideoIntercomIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19 37L19 10C19 7.23858 16.7614 5 14 5L10 5C7.23858 5 5 7.23857 5 10L5 37C5 39.7614 7.23858 42 10 42L14 42C16.7614 42 19 39.7614 19 37Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M38 19L38 11L26 11L26 19L38 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 6L38 6C40.7614 6 43 8.23858 43 11L43 37C43 39.7614 40.7614 42 38 42L24 42",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M38 31L34 31",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M38 36L34 36",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M10.5 44L10 42H14L13.5 44H10.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M26 32C26 31.4477 26.4477 31 27 31C27.5523 31 28 31.4477 28 32C28 32.5523 27.5523 33 27 33C26.4477 33 26 32.5523 26 32Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M26 32C26 31.4477 26.4477 31 27 31C27.5523 31 28 31.4477 28 32C28 32.5523 27.5523 33 27 33C26.4477 33 26 32.5523 26 32Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                stroke_linejoin: "round",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
