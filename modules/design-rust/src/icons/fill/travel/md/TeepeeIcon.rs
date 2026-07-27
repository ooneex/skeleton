use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TeepeeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TeepeeIcon(props: TeepeeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 7.64848L12.8022 2.65846L11.1185 3.73779L14.8122 9.5L11.2865 15H20.7135L17.1878 9.5L20.8815 3.73779L19.1978 2.65846L16 7.64848Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M1.67116 30L10.0045 17H21.9955L30.3288 30H22.3198L15.9987 20.1459L9.6967 30H1.67116Z",
                fill: "currentColor",
            }
            path {
                d: "M12.0707 30H19.9437L16.0013 23.8541L12.0707 30Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
