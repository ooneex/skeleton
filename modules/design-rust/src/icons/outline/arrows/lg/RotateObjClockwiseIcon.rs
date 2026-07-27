use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RotateObjClockwiseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RotateObjClockwiseIcon(props: RotateObjClockwiseIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17 14L36 14C38.7614 14 41 16.2386 41 19L41 38C41 40.7614 38.7614 43 36 43H17C14.2386 43 12 40.7614 12 38L12 19C12 16.2386 14.2386 14 17 14Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M19.5 3L25.5 9C24.9577 9 20.4365 9 15.9999 9C11.0294 9 7 13.0294 7 18V20",
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
