use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CoffeeMachineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CoffeeMachineIcon(props: CoffeeMachineIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20 43L43 43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M41 25H43C44.6569 25 46 26.3431 46 28V28C46 29.6569 44.6569 31 43 31H41",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M5 17V43H20V17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M33 17V20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M38 5H5V17H43V10C43 7.23858 40.7614 5 38 5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M25 25L25 30C25 34.4183 28.5817 38 33 38C37.4183 38 41 34.4183 41 30L41 25L25 25Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10 11C10 10.4477 10.4477 10 11 10C11.5523 10 12 10.4477 12 11C12 11.5523 11.5523 12 11 12C10.4477 12 10 11.5523 10 11Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10 11C10 10.4477 10.4477 10 11 10C11.5523 10 12 10.4477 12 11C12 11.5523 11.5523 12 11 12C10.4477 12 10 11.5523 10 11Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                stroke_linejoin: "round",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M10 38H12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_linejoin: "round",
                fill: "none",
            }
            path {
                d: "M10 33H12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_linejoin: "round",
                fill: "none",
            }
        }
    }
}
