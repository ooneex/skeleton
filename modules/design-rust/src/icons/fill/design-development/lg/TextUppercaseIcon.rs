use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextUppercaseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextUppercaseIcon(props: TextUppercaseIconProps) -> Element {
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
                d: "M24 24C24 15.7157 30.7157 9 39 9H43V12H39C32.3726 12 27 17.3726 27 24C27 30.6274 32.3726 36 39 36H42V28H37V25H45V39H39C30.7157 39 24 32.2843 24 24Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19.9456 30.5H5.94556V27.5H19.9456V30.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11.2478 9H14.6421L24.9241 39H20.9456V36.6446L12.9469 13.3068L4.94556 36.7302V39H1L11.2478 9Z",
                fill: "currentColor",
            }
        }
    }
}
