use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterUIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterUIcon(props: LetterUIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4 14V2H6V14C6 17.3137 8.68629 20 12 20C15.3137 20 18 17.3137 18 14V2H20V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14Z",
                fill: "currentColor",
            }
        }
    }
}
