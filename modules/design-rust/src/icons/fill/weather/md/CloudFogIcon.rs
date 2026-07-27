use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CloudFogIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CloudFogIcon(props: CloudFogIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 21L21 21V23L3 23L3 21Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 25L26 25V27L12 27V25Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 21H29V23H23V21Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 29H19V31H13V29Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 25H9.99999V27H6V25Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4.03687 11.6641C4.46532 5.70468 9.42946 1 15.5 1C21.7445 1 26.8265 5.97699 26.9956 12.1806C29.6855 12.8298 31.9776 15.2092 31.9776 18V19H0V18C0 15.1916 1.65567 12.7785 4.03687 11.6641Z",
                fill: "currentColor",
            }
        }
    }
}
