use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextSizeDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextSizeDownIcon(props: TextSizeDownIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4 19H14",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M2.0952 25H2L8.22222 6H9H9.77778L16 25H15.9073",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M28.9811 20.632C27.7247 23.5646 25.1673 24.9559 22.7812 24.9994C21.1044 25.0299 19.3689 23.9654 19.042 22.0896C18.7879 20.632 19.6813 19.195 21.8817 18.5477C24.2784 17.8426 29 18.0198 29 18.0198",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M29 25V16.7952C29 14.1469 26.8531 12 24.2048 12V12C22.9516 12 21.7483 12.4905 20.8523 13.3666L20 14.2",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
