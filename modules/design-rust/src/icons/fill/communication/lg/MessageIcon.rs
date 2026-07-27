use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MessageIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MessageIcon(props: MessageIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 10.5C2 6.91015 4.91015 4 8.5 4H39.5C43.0898 4 46 6.91015 46 10.5V29.5C46 33.0898 43.0899 36 39.5 36H27.4329L12 45.717V36H8.5C4.91015 36 2 33.0898 2 29.5L2 10.5Z",
                fill: "currentColor",
            }
        }
    }
}
