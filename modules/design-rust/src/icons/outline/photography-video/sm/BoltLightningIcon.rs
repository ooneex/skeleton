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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14.5128 2H8.15898L5.46667 14H10.9231L10.4667 20.7059L19.5 9.5H12.9667L14.5128 2Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
