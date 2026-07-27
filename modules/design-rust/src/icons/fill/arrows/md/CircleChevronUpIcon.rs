use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleChevronUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleChevronUpIcon(props: CircleChevronUpIconProps) -> Element {
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
                d: "M1 16C1 24.271 7.729 31 16 31C24.271 31 31 24.271 31 16C31 7.729 24.271 1 16 1C7.729 1 1 7.729 1 16ZM10 19.4142L8.58579 18L16 10.5858L23.4142 18L22 19.4142L16 13.4142L10 19.4142Z",
                fill: "currentColor",
            }
        }
    }
}
