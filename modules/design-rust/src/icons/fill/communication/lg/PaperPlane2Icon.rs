use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PaperPlane2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PaperPlane2Icon(props: PaperPlane2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M43.5113 4.48877L31.2421 44.3639L25.8743 35.9287L23.1904 31.7112L22.5194 30.6568L28 20.0001L17.3433 25.4807L16.2889 24.8097L12.0713 22.1258L3.63623 16.758L43.5113 4.48877Z",
                fill: "currentColor",
            }
        }
    }
}
