use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ScaleGaugeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ScaleGaugeIcon(props: ScaleGaugeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M29 18L26 22.5L26.5 21.75",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M28 27L28 26C28 23.7909 26.2091 22 24 22V22C21.7909 22 20 23.7909 20 26L20 27",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M38 5L10 5C7.23858 5 5 7.23857 5 10L5 38C5 40.7614 7.23857 43 10 43L38 43C40.7614 43 43 40.7614 43 38L43 10C43 7.23858 40.7614 5 38 5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M37 26.1579L37 24C37 16.8203 31.1797 11 24 11C16.8203 11 11 16.8203 11 24L11 26.1579C11 26.623 11.377 27 11.8421 27L36.1579 27C36.623 27 37 26.623 37 26.1579Z",
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
