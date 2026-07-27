use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsTransactionIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsTransactionIcon(props: ArrowsTransactionIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 23.5C20.1421 23.5 23.5 20.1421 23.5 16C23.5 11.8579 20.1421 8.5 16 8.5C11.8579 8.5 8.5 11.8579 8.5 16C8.5 20.1421 11.8579 23.5 16 23.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6.5 0.0858163L0.585787 6.00003L16 6.00003L16 4.00003L6.5 4.00003L6.5 0.0858163Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.5 31.9142L31.4142 26L16 26L16 28L25.5 28L25.5 31.9142Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
