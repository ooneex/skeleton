use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareArrowLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareArrowLeftIcon(props: SquareArrowLeftIconProps) -> Element {
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
                d: "M19 22C20.6569 22 22 20.6569 22 19L22 5C22 3.34314 20.6569 2 19 2L5 2C3.34315 2 2 3.34314 2 5L2 19C2 20.6569 3.34315 22 5 22L19 22ZM12.657 7.75732L9.41433 11L18.0001 11L18.0001 13L9.4144 13L12.657 16.2426L11.2428 17.6568L5.58594 12L11.2428 6.34311L12.657 7.75732Z",
                fill: "currentColor",
            }
        }
    }
}
