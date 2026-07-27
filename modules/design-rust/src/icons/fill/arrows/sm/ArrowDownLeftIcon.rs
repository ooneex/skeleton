use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowDownLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowDownLeftIcon(props: ArrowDownLeftIconProps) -> Element {
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
                d: "M21.4143 4.00003L4.70718 20.7071L3.29297 19.2929L20.0001 2.58582L21.4143 4.00003Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 12V19H12V21H3V12H5Z",
                fill: "currentColor",
            }
        }
    }
}
