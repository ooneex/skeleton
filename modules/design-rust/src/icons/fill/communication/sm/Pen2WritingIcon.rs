use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Pen2WritingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Pen2WritingIcon(props: Pen2WritingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "1",
                y: "20",
                width: "22",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m18.875,2.125c-1.492-1.493-3.922-1.493-5.414,0L4.079,11.507l-1.354,6.768,6.768-1.354,9.382-9.382c1.493-1.493,1.493-3.921,0-5.414Zm-1.414,4l-.875.875-2.586-2.586.875-.875c.713-.713,1.873-.713,2.586,0s.713,1.873,0,2.586Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
