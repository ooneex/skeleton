use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PileOfPooIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PileOfPooIcon(props: PileOfPooIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M35 19H13C9.68629 19 7 21.6863 7 25C7 28.3137 9.68629 31 13 31H35C38.3137 31 41 28.3137 41 25C41 21.6863 38.3137 19 35 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 31H36",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M39 31H9C5.68629 31 3 33.6863 3 37C3 40.3137 5.68629 43 9 43H39C42.3137 43 45 40.3137 45 37C45 33.6863 42.3137 31 39 31Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M18 19H28.2635C32.8572 19 36.3701 14.9054 35.6715 10.3651C35.2411 7.56695 33.7317 5.04877 31.4669 3.35015L31 3L30.4 3.8C28.8892 5.81445 26.5181 7 24 7H18C14.6863 7 12 9.68629 12 13C12 16.3137 14.6863 19 18 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
