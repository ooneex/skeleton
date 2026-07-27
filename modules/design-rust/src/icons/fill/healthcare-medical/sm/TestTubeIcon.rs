use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TestTubeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TestTubeIcon(props: TestTubeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19 4.5L17 5V18C17 20.7614 14.7614 23 12 23C9.23858 23 7 20.7614 7 18V5L5 4.5V1H19V4.5ZM9 16H12V14H9V16ZM9 9V11H12V9H9Z",
                fill: "currentColor",
            }
        }
    }
}
