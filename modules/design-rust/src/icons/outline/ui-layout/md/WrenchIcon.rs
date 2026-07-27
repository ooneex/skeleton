use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WrenchIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WrenchIcon(props: WrenchIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m20.817,15.651l-12.143,13.115c-1.484,1.602-4.002,1.651-5.546.107h0c-1.544-1.544-1.496-4.062.107-5.546l13.115-12.143",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            path {
                d: "m25.5,10.5l-4-4,4.024-4.024c-.784-.303-1.633-.476-2.524-.476-3.866,0-7,3.134-7,7s3.134,7,7,7,7-3.134,7-7c0-.891-.173-1.74-.476-2.524l-4.024,4.024Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
