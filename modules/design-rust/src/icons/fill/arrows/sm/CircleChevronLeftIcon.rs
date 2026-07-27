use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleChevronLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleChevronLeftIcon(props: CircleChevronLeftIconProps) -> Element {
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
                d: "M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM14.9142 8L13.5 6.58578L8.08579 12L13.5 17.4142L14.9142 16L10.9142 12L14.9142 8Z",
                fill: "currentColor",
            }
        }
    }
}
