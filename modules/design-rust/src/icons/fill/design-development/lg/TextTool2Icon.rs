use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextTool2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextTool2Icon(props: TextTool2IconProps) -> Element {
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
                d: "M30 29.5H18V26.5H30V29.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 22V26H2V22H5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M46 22V26H43V22H46Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M43 19L43 12C43 10.3431 41.6569 9 40 9L8 9C6.34315 9 5 10.3431 5 12L5 19L2 19L2 12C2 8.68629 4.68629 6 8 6L40 6C43.3137 6 46 8.68629 46 12L46 19L43 19Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M43 29L43 36C43 37.6569 41.6569 39 40 39L8 39C6.34315 39 5 37.6569 5 36L5 29L2 29L2 36C2 39.3137 4.68629 42 8 42L40 42C43.3137 42 46 39.3137 46 36L46 29L43 29Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22.4683 13H25.5304L33.9866 35H30V32.9899L24.0015 17.384L18 33.0506V35H14.0406L22.4683 13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
