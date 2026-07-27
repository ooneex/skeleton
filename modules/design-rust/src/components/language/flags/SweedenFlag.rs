use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SweedenFlagProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// Swedish flag icon (48 × 48).
#[component]
pub fn SweedenFlag(props: SweedenFlagProps) -> Element {
    rsx! {
        svg {
            xmlns: "http://www.w3.org/2000/svg",
            width: "48",
            height: "48",
            view_box: "0 0 48 48",
            ..props.attributes,
            title { "sweeden" }
            g {
                path {
                    fill: "#0A5189",
                    d: "M48,40c0,1.105-0.895,2-2,2H2c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h44c1.105,0,2,0.895,2,2V40z",
                }
                polygon {
                    fill: "#EFD358",
                    points: "48,20 20,20 20,6 12,6 12,20 0,20 0,28 12,28 12,42 20,42 20,28 48,28 ",
                }
            }
        }
    }
}
