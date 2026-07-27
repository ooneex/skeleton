use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CrownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CrownIcon(props: CrownIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17.2178 8.3916L23.1641 4.11914L22.3145 15H1.68555L0.835938 4.11914L6.78125 8.3916L12 1.31543L17.2178 8.3916Z",
                fill: "currentColor",
            }
            path {
                d: "M22.1406 17.2334C22.0188 18.7948 20.7165 19.9998 19.1504 20H4.84961C3.28346 19.9998 1.98124 18.7948 1.85938 17.2334L1.84082 17H22.1592L22.1406 17.2334Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
