use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Flag2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Flag2Icon(props: Flag2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7 8.25002L11.5251 6.54217C15.7673 4.94113 20.5148 5.42262 24.3491 7.84278V7.84278C27.3656 9.74677 30.9795 10.4686 34.496 9.86939L44 8.25002L37.5652 21.85L44 35.45L34.496 37.0694C30.9795 37.6686 27.3656 36.9468 24.3491 35.0428V35.0428C20.5148 32.6226 15.7673 32.1411 11.5251 33.7422L7 35.45",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M7 45V3",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
