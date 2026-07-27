use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GermanyFlagProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// German flag icon (48 × 48).
#[component]
pub fn GermanyFlag(props: GermanyFlagProps) -> Element {
    rsx! {
        svg {
            xmlns: "http://www.w3.org/2000/svg",
            width: "48",
            height: "48",
            view_box: "0 0 48 48",
            ..props.attributes,
            title { "germany" }
            g {
                path {
                    d: "M48,18H0V8c0-1.105,0.895-2,2-2h44c1.105,0,2,0.895,2,2V18z",
                }
                rect { y: "18", fill: "#EE0000", width: "48", height: "12" }
                path {
                    fill: "#FDCF00",
                    d: "M48,40c0,1.105-0.895,2-2,2H2c-1.105,0-2-0.895-2-2V30h48V40z",
                }
            }
        }
    }
}
