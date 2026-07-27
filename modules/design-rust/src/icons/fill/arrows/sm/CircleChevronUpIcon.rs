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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 0.999999 1 5.92487 1 12C0.999999 18.0751 5.92487 23 12 23ZM16 14.9142L17.4142 13.5L12 8.08579L6.58579 13.5L8 14.9142L12 10.9142L16 14.9142Z",
                fill: "currentColor",
            }
        }
    }
}
