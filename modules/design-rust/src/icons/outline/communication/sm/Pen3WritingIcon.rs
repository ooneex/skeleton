use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Pen3WritingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Pen3WritingIcon(props: Pen3WritingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 22H21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M13.7119 4.69774L13.5 4.5L18.7299 9.38125C19.9708 10.5394 20.0045 12.4955 18.8043 13.6957L17.5 15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M3.50006 18.5L8.00754 17.7482L19.1223 6.63344C20.1593 5.59636 20.1593 3.91492 19.1223 2.87783C18.0852 1.84075 16.4037 1.84075 15.3666 2.87783L4.25193 13.9926L3.50006 18.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
