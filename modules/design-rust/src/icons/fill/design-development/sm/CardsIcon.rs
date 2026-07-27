use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CardsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CardsIcon(props: CardsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 1V17H15V1H3Z",
                fill: "currentColor",
            }
            path {
                d: "M7.01445 19L6.65002 20.3601L19.2071 23.7248L23.607 7.30403L17 5.53369V17C17 18.1046 16.1046 19 15 19H7.01445Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
