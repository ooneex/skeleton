use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NumberFiveIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NumberFiveIcon(props: NumberFiveIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 15.5C16 13.0147 13.9853 11 11.5 11H6V2H17V4H8V9H11.5C15.0899 9 18 11.9101 18 15.5C18 19.0899 15.0899 22 11.5 22H6V20H11.5C13.9853 20 16 17.9853 16 15.5Z",
                fill: "currentColor",
            }
        }
    }
}
