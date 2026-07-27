use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CubeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CubeIcon(props: CubeIconProps) -> Element {
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
                d: "M13 23.1513V11.618L23 6.61804V18.7302L13 23.1513Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 0.406616L1.94238 4.85315L12 9.88197L22.0577 4.85315L12 0.406616Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 6.61804L11 11.618V23.1513L1 18.7302V6.61804Z",
                fill: "currentColor",
            }
        }
    }
}
