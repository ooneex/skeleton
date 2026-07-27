use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LemonWedgeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LemonWedgeIcon(props: LemonWedgeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M23 12H13",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M12 13V23",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M12.5 12.5094L20 20.0094",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M5.07538 19.9246C9.17588 24.0251 15.8241 24.0251 19.9246 19.9246C24.0251 15.8241 24.0251 9.17588 19.9246 5.07538",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M1.53985 23.4602C7.59298 29.5133 17.407 29.5133 23.4602 23.4602C29.5133 17.407 29.5133 7.59297 23.4602 1.53984L12.5 12.5L1.53985 23.4602Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
