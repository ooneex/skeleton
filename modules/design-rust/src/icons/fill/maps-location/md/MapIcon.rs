use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MapIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MapIcon(props: MapIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10 2.31592L1 5.81592V28.9618L10 25.4618V2.31592Z",
                fill: "currentColor",
            }
            path {
                d: "M12 25.6181L20 29.6182V6.38209L12 2.38208V25.6181Z",
                fill: "currentColor",
            }
            path {
                d: "M22 29.684V6.53808L31 3.03809V26.184L22 29.684Z",
                fill: "currentColor",
            }
        }
    }
}
