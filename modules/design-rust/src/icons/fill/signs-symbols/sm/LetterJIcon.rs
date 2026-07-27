use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterJIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterJIcon(props: LetterJIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5 15.5V14H7V15.5C7 17.9853 9.01472 20 11.5 20C13.9853 20 16 17.9853 16 15.5V4H12V2H18V15.5C18 19.0899 15.0899 22 11.5 22C7.91015 22 5 19.0899 5 15.5Z",
                fill: "currentColor",
            }
        }
    }
}
