use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Grid2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Grid2Icon(props: Grid2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m30.717,6.232l-4.949-4.95c-.944-.944-2.592-.944-3.536,0l-4.95,4.949c-.472.472-.732,1.1-.732,1.768s.26,1.296.732,1.768l4.949,4.95c.472.472,1.1.732,1.768.732s1.296-.26,1.768-.732l4.95-4.949c.472-.472.732-1.1.732-1.768s-.26-1.296-.732-1.768Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2",
                y: "2",
                width: "12",
                height: "12",
                rx: "2.5",
                ry: "2.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "18",
                y: "18",
                width: "12",
                height: "12",
                rx: "2.5",
                ry: "2.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "18",
                width: "12",
                height: "12",
                rx: "2.5",
                ry: "2.5",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
