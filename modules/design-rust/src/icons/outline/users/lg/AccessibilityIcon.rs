use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AccessibilityIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AccessibilityIcon(props: AccessibilityIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 11C26.2091 11 28 9.20914 28 7C28 4.79086 26.2091 3 24 3C21.7909 3 20 4.79086 20 7C20 9.20914 21.7909 11 24 11Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M18.5 20.5L6.60357 18.7376C5.68227 18.6011 5 17.8103 5 16.8789C5 15.8412 5.84122 15 6.87893 15H41.1211C42.1588 15 43 15.8412 43 16.8789C43 17.8103 42.3177 18.6011 41.3964 18.7376L29.5 20.5L32 45H27.5L25.5 32H22.5L20.5 45H16L18.5 20.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
