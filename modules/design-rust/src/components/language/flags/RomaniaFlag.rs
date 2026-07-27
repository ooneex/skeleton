use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RomaniaFlagProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// Romanian flag icon (48 × 48).
#[component]
pub fn RomaniaFlag(props: RomaniaFlagProps) -> Element {
    rsx! {
        svg {
            xmlns: "http://www.w3.org/2000/svg",
            width: "48",
            height: "48",
            view_box: "0 0 48 48",
            ..props.attributes,
            title { "romania" }
            g {
                rect { x: "16", y: "6", fill: "#FAD314", width: "16", height: "36" }
                path {
                    fill: "#CE1127",
                    d: "M48,40c0,1.105-0.895,2-2,2H32V6h14c1.105,0,2,0.895,2,2V40z",
                }
                path {
                    fill: "#00377B",
                    d: "M16,42H2c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h14V42z",
                }
            }
        }
    }
}
