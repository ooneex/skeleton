use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CopiesPlusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CopiesPlusIcon(props: CopiesPlusIconProps) -> Element {
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
                d: "M9 8H39V11H9V8Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 2H33V5H15V2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M46 14H2V44H26.0436C24.75 41.9794 24 39.5773 24 37C24 29.8203 29.8203 24 37 24C40.493 24 43.6642 25.3776 46 27.6191V14Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M47 37C47 42.5228 42.5228 47 37 47C31.4772 47 27 42.5228 27 37C27 31.4772 31.4772 27 37 27C42.5228 27 47 31.4772 47 37ZM38.5 31.5V35.5H42.5V38.5H38.5V42.5H35.5V38.5H31.5V35.5H35.5V31.5H38.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
