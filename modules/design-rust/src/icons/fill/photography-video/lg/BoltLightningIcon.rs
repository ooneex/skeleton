use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BoltLightningIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BoltLightningIcon(props: BoltLightningIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16.1504 2L9.71979 27.6686L22.1166 27.716L20.2511 44.0428L44.218 16.9184H28.5928L32.277 2H16.1504Z",
                fill: "currentColor",
            }
        }
    }
}
