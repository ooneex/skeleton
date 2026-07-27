use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RotateObjAnticlockwiseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RotateObjAnticlockwiseIcon(props: RotateObjAnticlockwiseIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M31 14L12 14C9.23858 14 7 16.2386 7 19L7 38C7 40.7614 9.23858 43 12 43H31C33.7614 43 36 40.7614 36 38V19C36 16.2386 33.7614 14 31 14Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M28.5 3L22.5 9C23.0423 9 27.5635 9 32.0001 9C36.9706 9 41 13.0294 41 18V20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
