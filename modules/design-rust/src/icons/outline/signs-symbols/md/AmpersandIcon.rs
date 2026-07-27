use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AmpersandIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AmpersandIcon(props: AmpersandIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M28 30L15 17.4483C11 13.5862 7.5 10.6897 7.5 7.31034C7.5 4.33914 10.0856 2 13 2C15.9144 2 18.5 4.33914 18.5 7.31034C18.5 13.5862 5 14.5517 5 22.2759C5 26.5415 9.582 30 14 30C27 30 27 17.4483 27 17.4483",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
