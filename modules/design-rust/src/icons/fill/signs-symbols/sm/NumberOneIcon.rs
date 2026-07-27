use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NumberOneIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NumberOneIcon(props: NumberOneIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 4.28125L6.84375 8.40527L5.59473 6.84375L11.375 2.21875L11.6494 2H14V22H12V4.28125Z",
                fill: "currentColor",
            }
        }
    }
}
