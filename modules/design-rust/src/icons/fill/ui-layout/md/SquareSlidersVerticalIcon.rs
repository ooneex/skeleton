use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareSlidersVerticalIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareSlidersVerticalIcon(props: SquareSlidersVerticalIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m26,2H6c-2.206,0-4,1.794-4,4v20c0,2.206,1.794,4,4,4h20c2.206,0,4-1.794,4-4V6c0-2.206-1.794-4-4-4ZM10,7h2v10h-2V7Zm5,14h-3v4h-2v-4h-3v-2h8v2Zm7,4h-2v-10h2v10Zm3-12h-8v-2h3v-4h2v4h3v2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
