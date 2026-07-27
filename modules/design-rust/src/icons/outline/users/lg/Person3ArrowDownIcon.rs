use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Person3ArrowDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Person3ArrowDownIcon(props: Person3ArrowDownIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M38.5 16L38.5 38L38.5 37.2856",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M44.5 32L38.5 38L32.5 32",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M7 37.5L10.5334 20.2748C11.1632 17.2042 13.8655 15 17 15C20.1345 15 22.8368 17.2042 23.4666 20.2748L27 37.5L22.5 39L21.5 46L12.5 46L11.5 39L7 37.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17 11C19.4853 11 21.5 8.98528 21.5 6.5C21.5 4.01472 19.4853 2 17 2C14.5147 2 12.5 4.01472 12.5 6.5C12.5 8.98528 14.5147 11 17 11Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
