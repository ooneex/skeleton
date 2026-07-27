use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Cutlery3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Cutlery3Icon(props: Cutlery3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M33 30L31.4933 41.3004C31.2321 43.2594 32.756 45 34.7323 45V45C36.537 45 38 43.537 38 41.7323V30",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M38 30L38 4H37C32.5817 4 29 7.58172 29 12V30H38Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12.5 23.5L11.6626 41.5038C11.5741 43.4078 13.0939 45 15 45V45C16.9061 45 18.4259 43.4078 18.3374 41.5038L17.5 23.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M8 14.5C8 9.2533 11.134 5 15 5C18.866 5 22 9.2533 22 14.5C22 19.7467 18.866 24 15 24C11.134 24 8 19.7467 8 14.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
