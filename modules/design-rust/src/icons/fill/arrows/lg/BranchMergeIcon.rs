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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3.5 26.5H41.5V29.5H3.5V26.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M29.8787 38L39.8787 28L29.8787 18L32 15.8787L44.1213 28L32 40.1213L29.8787 38Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3.5 8.5H12.1716C13.0998 8.5 13.9901 8.86875 14.6464 9.52513L24.1213 19L22 21.1213L12.5251 11.6464C12.4314 11.5527 12.3042 11.5 12.1716 11.5H3.5V8.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
