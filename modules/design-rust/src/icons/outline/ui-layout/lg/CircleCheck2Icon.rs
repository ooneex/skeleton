use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleCheck2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleCheck2Icon(props: CircleCheck2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M34.6079 5.8723C31.4949 4.04665 27.8697 3 24 3C12.402 3 3 12.402 3 24C3 35.598 12.402 45 24 45C35.598 45 45 35.598 45 24C45 20.6798 44.2295 17.5396 42.8575 14.7484",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12.5 22L21.5 31L44 4",
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
