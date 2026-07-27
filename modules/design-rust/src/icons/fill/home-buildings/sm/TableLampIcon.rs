use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TableLampIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TableLampIcon(props: TableLampIconProps) -> Element {
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
                d: "M9 12V18H7V12H9Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 12V23H11V12H13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20.4782 11.3393C20.9334 12.6397 19.9682 14 18.5905 14L5.40948 14C4.03178 14 3.06664 12.6396 3.52176 11.3393L6.79052 2L17.2095 2L20.4782 11.3393Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 21H17V23H7V21Z",
                fill: "currentColor",
            }
        }
    }
}
