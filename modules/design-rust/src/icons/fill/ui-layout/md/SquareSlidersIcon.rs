use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareSlidersIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareSlidersIcon(props: SquareSlidersIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m26,2H6c-2.206,0-4,1.794-4,4v20c0,2.206,1.794,4,4,4h20c2.206,0,4-1.794,4-4V6c0-2.206-1.794-4-4-4ZM7,10h4v-3h2v8h-2v-3h-4v-2Zm10,12H7v-2h10v2Zm8,0h-4v3h-2v-8h2v3h4v2Zm0-10h-10v-2h10v2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
