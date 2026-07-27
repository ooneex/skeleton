use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CheckUnderlineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CheckUnderlineIcon(props: CheckUnderlineIconProps) -> Element {
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
                d: "M28.8413 4.93554L11.0344 24.4457L3.01434 16.4574L4.42575 15.0404L10.9656 21.5543L27.3641 3.58728L28.8413 4.93554Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 27H30V29H2V27Z",
                fill: "currentColor",
            }
        }
    }
}
