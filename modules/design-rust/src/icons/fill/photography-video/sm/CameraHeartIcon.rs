use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CameraHeartIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CameraHeartIcon(props: CameraHeartIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17.5352 5H20C21.6569 5 23 6.34315 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V8C1 6.34315 2.34315 5 4 5H6.46484L8.46484 2H15.5352L17.5352 5ZM14.0771 9C13.2336 9 12.523 9.50683 12 10.0957C11.477 9.50683 10.7664 9 9.92285 9C8.5851 9.00022 7.50011 10.0855 7.5 11.4248C7.5 13.7148 11.0017 16.0489 12 16.5C12.9983 16.0489 16.5 13.7148 16.5 11.4248C16.4999 10.0855 15.4149 9.00022 14.0771 9Z",
                fill: "currentColor",
            }
        }
    }
}
