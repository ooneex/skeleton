use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HeartSlashIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HeartSlashIcon(props: HeartSlashIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m11.779,25.878l4.216,3.122,4.477-3.307c1.581-1.168,6.899-5.395,8.975-10.766.844-2.182.689-4.521-.24-6.476",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m26.623,5.376c-.451-.316-.941-.587-1.467-.804-3.376-1.398-7.149-.145-9.157,2.806-2.007-2.952-5.781-4.204-9.157-2.806C2.894,6.206.973,10.842,2.553,14.927c1.326,3.43,3.975,6.394,6.128,8.392",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-cap": "butt",
            }
            line {
                x1: "2",
                y1: "30",
                x2: "30",
                y2: "2",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}
