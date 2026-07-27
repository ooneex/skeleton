use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ScreenReaderIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ScreenReaderIcon(props: ScreenReaderIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "12 14 8 14 8 19 12 19 17 22 17 11 12 14",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m22,8.5v-2.5c0-1.105-.895-2-2-2H4c-1.105,0-2,.895-2,2v12c0,1.105.895,2,2,2",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m21,12.5c1.214.912,2,2.365,2,4s-.786,3.088-2,4",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}
