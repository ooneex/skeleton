use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleArrowRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleArrowRightIcon(props: CircleArrowRightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16 1C7.729 1 1 7.729 1 16C1 24.271 7.729 31 16 31C24.271 31 31 24.271 31 16C31 7.729 24.271 1 16 1ZM7 17H22.0858L16.0858 23L17.5 24.4142L25.9142 16L17.5 7.58579L16.0858 9L22.0858 15L7 15V17Z",
                fill: "currentColor",
            }
        }
    }
}
