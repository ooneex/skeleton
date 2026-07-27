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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 34.5C29.799 34.5 34.5 29.799 34.5 24C34.5 18.201 29.799 13.5 24 13.5C18.201 13.5 13.5 18.201 13.5 24C13.5 29.799 18.201 34.5 24 34.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12.5 0.878663L2.37868 11L24 11L24 7.99998L12.5 7.99998L12.5 0.878663Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M35.5 47.1213L45.6213 37L24 37L24 40L35.5 40V47.1213Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
