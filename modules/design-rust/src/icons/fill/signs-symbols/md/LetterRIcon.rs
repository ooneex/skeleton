use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterRIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterRIcon(props: LetterRIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16.1016 18L27.3008 30H23.8945V29.2812L15.2314 20H14V18H16.1016Z",
                fill: "currentColor",
            }
            path {
                d: "M25 11C25 7.13401 21.866 4 18 4H10V18H18C21.866 18 25 14.866 25 11ZM27 11C27 15.9706 22.9706 20 18 20H10V30H8V2H18C22.9706 2 27 6.02944 27 11Z",
                fill: "currentColor",
            }
        }
    }
}
