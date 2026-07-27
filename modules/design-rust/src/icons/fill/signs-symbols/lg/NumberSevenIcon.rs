use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NumberSevenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NumberSevenIcon(props: NumberSevenIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19.6426 42.5C19.6426 31.5102 22.7593 20.7455 28.6299 11.4551L31.4453 7H13V4H35V6.99023L34.7676 7.35645L31.166 13.0576C25.5985 21.8685 22.6426 32.0775 22.6426 42.5V44H19.6426V42.5Z",
                fill: "currentColor",
            }
        }
    }
}
