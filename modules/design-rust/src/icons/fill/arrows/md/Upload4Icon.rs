use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Upload4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Upload4Icon(props: Upload4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "24.414 10 16 1.586 7.586 10 9 11.414 15 5.414 15 22 17 22 17 5.414 23 11.414 24.414 10",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m26,30H6c-2.206,0-4-1.794-4-4v-5h2v5c0,1.103.897,2,2,2h20c1.103,0,2-.897,2-2v-5h2v5c0,2.206-1.794,4-4,4Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
