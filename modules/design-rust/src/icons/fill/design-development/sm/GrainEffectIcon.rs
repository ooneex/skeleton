use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GrainEffectIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GrainEffectIcon(props: GrainEffectIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9 2H2V9H9V2Z",
                fill: "currentColor",
            }
            path {
                d: "M9 15H2V22H9V15Z",
                fill: "currentColor",
            }
            path {
                d: "M22 2H15V9H22V2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M15.5 8.5H8.5V15.5H15.5V8.5Z",
                fill: "currentColor",
            }
            path {
                d: "M15.5 15H8.5V22H15.5V15Z",
                fill: "currentColor",
            }
        }
    }
}
