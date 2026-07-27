use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SidebarRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SidebarRightIcon(props: SidebarRightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            line {
                x1: "15",
                y1: "4",
                x2: "15",
                y2: "20",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            rect {
                x: "4",
                y: "2",
                width: "16",
                height: "20",
                rx: "2",
                ry: "2",
                transform: "translate(24) rotate(90)",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
