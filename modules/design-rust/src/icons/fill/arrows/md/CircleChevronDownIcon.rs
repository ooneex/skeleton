use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleChevronDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleChevronDownIcon(props: CircleChevronDownIconProps) -> Element {
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
                d: "M1 16C1 7.729 7.729 1 16 1C24.271 1 31 7.729 31 16C31 24.271 24.271 31 16 31C7.729 31 1 24.271 1 16ZM10 12.5858L8.58579 14L16 21.4142L23.4142 14L22 12.5858L16 18.5858L10 12.5858Z",
                fill: "currentColor",
            }
        }
    }
}
