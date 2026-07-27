use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VolumeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VolumeIcon(props: VolumeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 0.19574V23.8042L11.7132 18H5C3.34315 18 2 16.6568 2 15V8.99999C2 7.34313 3.34315 5.99999 5 5.99999H11.7132L21 0.19574Z",
                fill: "currentColor",
            }
        }
    }
}
