use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SantaHatIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SantaHatIcon(props: SantaHatIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M18 13V17H2V13H18Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M3 11H18C19.1046 11 20 11.8954 20 13V20H22V10.5C22 5.25329 17.7467 1 12.5 1C7.25329 1 3 5.25329 3 10.5V11Z",
                fill: "currentColor",
            }
            path {
                d: "M24 21C24 22.6569 22.6569 24 21 24C19.3431 24 18 22.6569 18 21C18 19.3431 19.3431 18 21 18C22.6569 18 24 19.3431 24 21Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
