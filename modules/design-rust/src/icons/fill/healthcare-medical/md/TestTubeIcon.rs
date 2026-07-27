use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TestTubeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TestTubeIcon(props: TestTubeIconProps) -> Element {
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
                d: "M26 5L22 5.5V25C22 28.3137 19.3137 31 16 31C12.6863 31 10 28.3137 10 25V5.5L6 5V1H26V5ZM12 22H16V20H12V22ZM12 17H16V15H12V17ZM12 10V12H16V10H12Z",
                fill: "currentColor",
            }
        }
    }
}
