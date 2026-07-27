use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleMediaPauseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleMediaPauseIcon(props: CircleMediaPauseIconProps) -> Element {
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
                d: "M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM10.5 7V8V16V17H8.5V16V8V7H10.5ZM15.5 8V7H13.5V8V16V17H15.5V16V8Z",
                fill: "currentColor",
            }
        }
    }
}
