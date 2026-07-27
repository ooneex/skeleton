use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PortugalFlagProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// Portuguese flag icon (48 × 48).
#[component]
pub fn PortugalFlag(props: PortugalFlagProps) -> Element {
    rsx! {
        svg {
            xmlns: "http://www.w3.org/2000/svg",
            width: "48",
            height: "48",
            view_box: "0 0 48 48",
            ..props.attributes,
            title { "portugal" }
            g {
                path {
                    fill: "#006600",
                    d: "M18,42H2c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h16V42z",
                }
                path {
                    fill: "#FE0000",
                    d: "M48,40c0,1.105-0.895,2-2,2H18V6h28c1.105,0,2,0.895,2,2V40z",
                }
                circle { fill: "#FAFB00", cx: "18", cy: "22", r: "6" }
            }
        }
    }
}
