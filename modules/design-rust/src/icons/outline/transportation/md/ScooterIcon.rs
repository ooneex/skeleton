use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ScooterIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ScooterIcon(props: ScooterIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 23C12 25.2091 10.2091 27 8 27C5.79086 27 4 25.2091 4 23",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M26.5 10L27.4164 11.8328C28.4578 13.9156 29 16.2123 29 18.541V20.2557",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M22 23H3C2.44772 23 2 22.5523 2 22V20C2 15.5817 5.58172 12 10 12H14V18H16.0185C19.4631 18 22.3957 15.4941 22.9329 12.0917L23.5 8.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M23 7H20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            circle {
                cx: "26",
                cy: "23",
                r: "4",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M29 10H26C24.32 10 23 8.68 23 7C23 5.32 24.32 4 26 4H29V10Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
