use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DragRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DragRightIcon(props: DragRightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "6",
                cy: "12",
                r: "6",
                fill: "currentColor",
            }
            path {
                d: "M22.5 11V13H13.9355C13.9764 12.6723 14 12.3388 14 12C14 11.6612 13.9764 11.3277 13.9355 11H22.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M18.5 17.4141L23.9141 12L18.5 6.58594L17.0859 8L21.0859 12L17.0859 16L18.5 17.4141Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
