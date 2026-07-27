use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BranchOutIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BranchOutIcon(props: BranchOutIconProps) -> Element {
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
                d: "M16.9999 22.4142L22.4141 17L16.9999 11.5858L15.5857 13L19.5857 17L15.5857 21L16.9999 22.4142Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11.4999 12.4142L16.9141 7.00003L11.4999 1.58582L10.0857 3.00003L14.0857 7.00003L10.0857 11L11.4999 12.4142Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 16H20.5V18H2V16Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15.5 6H7.96125C7.0499 6 6.18796 6.41427 5.61864 7.12591L1.59444 12.1562L3.15617 13.4056L7.18038 8.3753C7.37015 8.13809 7.65747 8 7.96125 8H15.5V6Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
