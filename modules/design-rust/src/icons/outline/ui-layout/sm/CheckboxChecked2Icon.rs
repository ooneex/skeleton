use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CheckboxChecked2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CheckboxChecked2Icon(props: CheckboxChecked2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m15.793,3H5c-1.105,0-2,.895-2,2v14c0,1.105.895,2,2,2h14c1.105,0,2-.895,2-2v-9.752",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            polyline {
                points: "7 11 11 15 21 3",
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
