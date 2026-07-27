use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CyclingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CyclingIcon(props: CyclingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "5",
                cy: "17",
                r: "4",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            circle {
                cx: "19",
                cy: "17",
                r: "4",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "M18.785,2.056A2,2,0,1,1,17.692,5.9C16.63,5.6,14,2.776,14,2.776S17.722,1.754,18.785,2.056Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "M12,18V13.5a1,1,0,0,0-.4-.8L9.294,10.971a1,1,0,0,1,.153-1.7l3.908-1.954a1,1,0,0,1,1.155.188l2.2,2.2a1,1,0,0,0,.707.293H20",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
