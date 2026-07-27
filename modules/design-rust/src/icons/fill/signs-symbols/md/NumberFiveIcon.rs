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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22 21C22 17.134 18.866 14 15 14H8V2H22V4H10V12H15C19.9706 12 24 16.0294 24 21C24 25.9706 19.9706 30 15 30H8V28H15C18.866 28 22 24.866 22 21Z",
                fill: "currentColor",
            }
        }
    }
}
