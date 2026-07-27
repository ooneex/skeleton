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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 22C20.6569 22 22 20.6569 22 19L22 5C22 3.34315 20.6569 2 19 2L5 2C3.34315 2 2 3.34314 2 5L2 19C2 20.6569 3.34314 22 5 22L19 22ZM14.9142 8L13.5 6.58579L8.08578 12L13.5 17.4142L14.9142 16L10.9142 12L14.9142 8Z",
                fill: "currentColor",
            }
        }
    }
}
