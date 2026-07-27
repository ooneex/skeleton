use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ConversionIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ConversionIcon(props: ConversionIconProps) -> Element {
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
                d: "M18 2.08582L30.9142 14H2V12H18V2.08582Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14 29.9142L1.08579 18H30V20H14V29.9142Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
