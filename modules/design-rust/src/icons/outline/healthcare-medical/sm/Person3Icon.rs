use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Person3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Person3Icon(props: Person3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m14.5,23h-5l-.5-5h-2l1.826-9.13c.129-.647.567-1.184,1.171-1.449.515-.225,1.194-.421,2.003-.421.314,0,1.121.03,2.032.433.591.261,1.015.803,1.142,1.436.609,3.043,1.217,6.087,1.826,9.13h-2l-.5,5Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m12,4h0c-.829,0-1.5-.671-1.5-1.5h0c0-.829.671-1.5,1.5-1.5h0c.829,0,1.5.671,1.5,1.5h0c0,.829-.671,1.5-1.5,1.5Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}
