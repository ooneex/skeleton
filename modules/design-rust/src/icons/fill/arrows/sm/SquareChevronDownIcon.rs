use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareChevronDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareChevronDownIcon(props: SquareChevronDownIconProps) -> Element {
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
                d: "M22 5C22 3.34315 20.6569 2 19 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34314 22 5 22H19C20.6569 22 22 20.6569 22 19V5ZM8 9.08579L6.58579 10.5L12 15.9142L17.4142 10.5L16 9.08579L12 13.0858L8 9.08579Z",
                fill: "currentColor",
            }
        }
    }
}
