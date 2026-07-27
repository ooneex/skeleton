use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CarDoorIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CarDoorIcon(props: CarDoorIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M38 5L27 5C14.8497 5 5 14.8497 5 27V29.1111L5 38C5 40.7614 7.23858 43 10 43L38 43C40.7614 43 43 40.7614 43 38L43 10C43 7.23858 40.7614 5 38 5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M38 10L27.0607 10C19.3589 10 12.6192 15.1779 10.6347 22.6197L10 25L38 25V10Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M38 30H34",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
