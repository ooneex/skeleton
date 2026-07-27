use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsExpandX2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsExpandX2Icon(props: ArrowsExpandX2IconProps) -> Element {
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
                d: "M2 16.9851L30 16.9851L30 14.9851L2 14.9851L2 16.9851Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11.9142 7.51468L3.42893 16L11.9142 24.4852L10.5 25.8995L0.600506 16L10.5 6.10046L11.9142 7.51468Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20.1004 7.51468L28.5857 16L20.1004 24.4852L21.5146 25.8995L31.4141 16L21.5146 6.10046L20.1004 7.51468Z",
                fill: "currentColor",
            }
        }
    }
}
