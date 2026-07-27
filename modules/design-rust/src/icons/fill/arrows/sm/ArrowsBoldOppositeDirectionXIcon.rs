use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsBoldOppositeDirectionXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsBoldOppositeDirectionXIcon(props: ArrowsBoldOppositeDirectionXIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M1.5 17L8 12V15H21V19H8V22L1.5 17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M22.5 7L16 2V5H3V9H16V12L22.5 7Z",
                fill: "currentColor",
            }
        }
    }
}
