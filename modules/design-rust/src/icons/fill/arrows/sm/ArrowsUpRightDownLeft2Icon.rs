use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsUpRightDownLeft2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsUpRightDownLeft2Icon(props: ArrowsUpRightDownLeft2IconProps) -> Element {
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
                d: "M11 9L11 2L13 2L13 9L11 9Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11 15L11 22L13 22L13 15L11 15Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16.5962 5.18189L11.9999 0.585757L7.4038 5.18193L8.81802 6.59613L11.9999 3.41417L15.182 6.59613L16.5962 5.18189Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16.5962 18.8181L11.9999 23.4142L7.4038 18.8181L8.81802 17.4039L11.9999 20.5858L15.182 17.4039L16.5962 18.8181Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 11L21.9999 11L21.9999 13L15 13L15 11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 11L1.99992 11L1.99992 13L9 13V11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18.818 16.5962L23.4142 11.9999L18.818 7.4038L17.4038 8.81802L20.5858 11.9999L17.4038 15.182L18.818 16.5962Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5.18196 16.5962L0.585818 11.9999L5.18199 7.4038L6.59619 8.81802L3.41423 11.9999L6.59619 15.182L5.18196 16.5962Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
