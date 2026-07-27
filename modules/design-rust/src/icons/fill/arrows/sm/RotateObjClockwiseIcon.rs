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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 9C6 7.89543 6.89543 7 8 7H19C20.1046 7 21 7.89543 21 9V20C21 21.1046 20.1046 22 19 22H8C6.89543 22 6 21.1046 6 20V9Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 0.0858154L12.9142 5.00003H8.00043C5.79118 5.00003 4 6.791 4 9.00003V12H2V9.00003C2 5.68621 4.68684 3.00003 8.00043 3.00003H8.08579L8 0.0858154Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
