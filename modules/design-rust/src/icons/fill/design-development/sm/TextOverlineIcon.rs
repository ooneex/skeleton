use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextOverlineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextOverlineIcon(props: TextOverlineIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16 18H8V16H16V18Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10.6789 6H13.3211L18.9084 22H16.2916V20.5729L12 8.28322L7.69144 20.6214V22H5.09158L10.6789 6Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 2H22V4H2V2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
