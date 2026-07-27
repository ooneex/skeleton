use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BottleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BottleIcon(props: BottleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9.5 6H14.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M6 13H18",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M6 18H18",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14.071 2.9233L14.5 8.5L15.5757 8.961C17.0464 9.59132 18 11.0375 18 12.6376V22H6V12.6376C6 11.0375 6.95359 9.59132 8.42432 8.961L9.5 8.5L9.92898 2.9233C9.96905 2.40231 10.4035 2 10.926 2H13.074C13.5965 2 14.0309 2.40231 14.071 2.9233Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
