use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BranchMergeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BranchMergeIcon(props: BranchMergeIconProps) -> Element {
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
                d: "M14.5857 9.00003L19.5857 14L14.5857 19L15.9999 20.4142L22.4141 14L15.9999 7.58582L14.5857 9.00003Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 13H20.5V15H2V13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 4H6.03875C6.9501 4 7.81204 4.41427 8.38136 5.12591L12.4056 10.1562L10.8438 11.4056L6.81962 6.3753C6.62985 6.13809 6.34253 6 6.03875 6H2V4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
