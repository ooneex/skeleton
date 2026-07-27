use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HdmiIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HdmiIcon(props: HdmiIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13 8H11V5H9V8L5 8V1H19L19 8H15V5H13V8Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 23L6 19.2398C6 19.0011 5.91461 18.7703 5.75925 18.5891L3.72223 16.2125C3.25617 15.6688 3 14.9763 3 14.2602L3 10L21 10L21 14.2602C21 14.9763 20.7438 15.6688 20.2778 16.2125L18.2407 18.5891C18.0854 18.7703 18 19.0011 18 19.2398L18 23L6 23Z",
                fill: "currentColor",
            }
        }
    }
}
