use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CurlingStoneIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CurlingStoneIcon(props: CurlingStoneIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2 20H30",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M23 13L21.5681 7.27239C21.2342 5.93689 20.0343 5 18.6577 5H9C7.89543 5 7 5.89543 7 7V7C7 8.10457 7.89543 9 9 9H17V13",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            rect {
                x: "2",
                y: "13",
                width: "28",
                height: "15",
                rx: "7",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
