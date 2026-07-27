use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShareRight3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShareRight3Icon(props: ShareRight3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M44.6666 23.9999L22.5 5V17.4116L18.0001 17.4115C9.71579 17.4114 2.99996 24.1272 2.99998 32.4116L3 45.1763L3 44.5881C2.99997 36.8561 9.26808 30.588 17.0001 30.5881L22.5 30.5881V43L44.6666 23.9999Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
