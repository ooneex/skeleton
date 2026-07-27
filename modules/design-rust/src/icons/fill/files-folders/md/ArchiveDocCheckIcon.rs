use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArchiveDocCheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArchiveDocCheckIcon(props: ArchiveDocCheckIconProps) -> Element {
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
                d: "M2 26V19H30V26C30 28.2091 28.2091 30 26 30L6 30C3.79086 30 2 28.2091 2 26ZM14 22H13V24H14H18H19V22H18H14Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 5C5 2.79086 6.79086 1 9 1H23C25.2091 1 27 2.79086 27 5V17H25V5C25 3.89543 24.1046 3 23 3H9C7.89543 3 7 3.89543 7 5V17H5V5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21.9141 7.50003L14.4999 14.9142L10.0857 10.5L11.4999 9.08582L14.4999 12.0858L20.4999 6.08582L21.9141 7.50003Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
