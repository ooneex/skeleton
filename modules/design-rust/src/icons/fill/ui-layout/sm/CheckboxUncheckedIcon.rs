use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CheckboxUncheckedIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CheckboxUncheckedIcon(props: CheckboxUncheckedIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "2",
                y: "2",
                width: "20",
                height: "20",
                rx: "3",
                ry: "3",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
