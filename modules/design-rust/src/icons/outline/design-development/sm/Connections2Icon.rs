use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Connections2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Connections2Icon(props: Connections2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "16.025",
                y: "9.525",
                width: "4.95",
                height: "4.95",
                transform: "translate(40.067 7.404) rotate(135)",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            rect {
                x: "3.025",
                y: "9.525",
                width: "4.95",
                height: "4.95",
                transform: "translate(-6.874 7.404) rotate(-45)",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            rect {
                x: "9.525",
                y: "3.025",
                width: "4.95",
                height: "4.95",
                transform: "translate(7.404 -6.874) rotate(45)",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            rect {
                x: "9.525",
                y: "16.025",
                width: "4.95",
                height: "4.95",
                transform: "translate(7.404 40.067) rotate(-135)",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
