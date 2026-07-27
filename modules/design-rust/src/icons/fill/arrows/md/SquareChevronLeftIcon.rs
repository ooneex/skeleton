use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareChevronLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareChevronLeftIcon(props: SquareChevronLeftIconProps) -> Element {
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
                d: "M6 2C3.79086 2 2 3.79086 2 6V26C2 28.2091 3.79086 30 6 30H26C28.2091 30 30 28.2091 30 26V6C30 3.79086 28.2091 2 26 2H6ZM19.4142 10L18 8.58579L10.5858 16L18 23.4142L19.4142 22L13.4142 16L19.4142 10Z",
                fill: "currentColor",
            }
        }
    }
}
