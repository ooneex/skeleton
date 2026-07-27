use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowDoorOut2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowDoorOut2Icon(props: ArrowDoorOut2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "20 26 12 26 12 24 18 24 18 18 20 18 20 26",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "24 6.586 22.586 8 27.586 13 18 13 18 15 27.586 15 22.586 20 24 21.414 31.414 14 24 6.586",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m2,2v22.566l12,7.2V8.434l-7.39-4.434h11.39v6h2V2H2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
