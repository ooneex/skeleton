use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowDiagonalIn2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowDiagonalIn2Icon(props: ArrowDiagonalIn2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m18,16h12V6c0-2.206-1.794-4-4-4H6c-2.206,0-4,1.794-4,4v20c0,2.206,1.794,4,4,4h10v-12c0-1.104.896-2,2-2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "30.707 29.293 21.414 20 30 20 30 18 18 18 18 30 20 30 20 21.414 29.293 30.707 30.707 29.293",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
