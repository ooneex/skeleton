use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MsgAlertIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MsgAlertIcon(props: MsgAlertIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m12,2C5.935,2,1,6.486,1,12c0,1.836.547,3.615,1.588,5.175l-1.551,5.788,6.634-1.777c1.381.541,2.836.814,4.329.814,6.065,0,11-4.486,11-10S18.065,2,12,2Zm-1,5h2v6.5h-2v-6.5Zm1,10.5c-.689,0-1.25-.561-1.25-1.25s.561-1.25,1.25-1.25,1.25.561,1.25,1.25-.561,1.25-1.25,1.25Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
