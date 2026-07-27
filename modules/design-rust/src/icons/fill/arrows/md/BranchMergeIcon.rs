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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 18H29V20H2V18Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20.5857 26L27.5857 19L20.5857 12L21.9999 10.5858L30.4141 19L21.9999 27.4142L20.5857 26Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 5H8.08013C8.9559 5 9.78795 5.38269 10.3579 6.04763L16.41 13.1085L14.8915 14.41L8.83939 7.34921C8.6494 7.12756 8.37206 7 8.08013 7H2V5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
