use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MsgsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MsgsIcon(props: MsgsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m11.037,20.498c.917.32,1.915.502,2.963.502.951,0,1.859-.153,2.704-.419l5.296,1.419-1.17-4.368c.639-.918,1.03-1.976,1.128-3.107",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m11,1C6.029,1,2,4.582,2,9c0,1.522.487,2.94,1.317,4.151l-1.317,4.915,5.87-1.573c.976.322,2.028.507,3.13.507,4.971,0,9-3.582,9-8S15.971,1,11,1Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
