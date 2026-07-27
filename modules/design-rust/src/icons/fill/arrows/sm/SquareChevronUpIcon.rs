use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareChevronUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareChevronUpIcon(props: SquareChevronUpIconProps) -> Element {
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
                d: "M22 19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5C2 3.34315 3.34314 2 5 2H19C20.6569 2 22 3.34315 22 5V19ZM8 14.9142L6.58579 13.5L12 8.08578L17.4142 13.5L16 14.9142L12 10.9142L8 14.9142Z",
                fill: "currentColor",
            }
        }
    }
}
