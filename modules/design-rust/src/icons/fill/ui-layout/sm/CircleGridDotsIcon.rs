use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleGridDotsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleGridDotsIcon(props: CircleGridDotsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m11.75,1C5.685,1,.75,5.935.75,12s4.935,11,11,11,11-4.935,11-11S17.815,1,11.75,1Zm-5.25,12.25c-.69,0-1.25-.56-1.25-1.25s.56-1.25,1.25-1.25,1.25.56,1.25,1.25-.56,1.25-1.25,1.25Zm5.25,5.25c-.69,0-1.25-.56-1.25-1.25s.56-1.25,1.25-1.25,1.25.56,1.25,1.25-.56,1.25-1.25,1.25Zm0-5.25c-.69,0-1.25-.56-1.25-1.25s.56-1.25,1.25-1.25,1.25.56,1.25,1.25-.56,1.25-1.25,1.25Zm0-5.25c-.69,0-1.25-.56-1.25-1.25s.56-1.25,1.25-1.25,1.25.56,1.25,1.25-.56,1.25-1.25,1.25Zm5.25,5.25c-.69,0-1.25-.56-1.25-1.25s.56-1.25,1.25-1.25,1.25.56,1.25,1.25-.56,1.25-1.25,1.25Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
