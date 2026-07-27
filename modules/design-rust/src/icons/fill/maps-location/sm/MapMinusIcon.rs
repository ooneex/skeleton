use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MapMinusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MapMinusIcon(props: MapMinusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7 2.00562L1 4.31331V21.9561L7 19.6484V2.00562Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 18H23V20H13V18Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M11.0374 20.3868L9 19.3681V1.63208L15 4.63208L15 16.0001H13C11.8954 16.0001 11 16.8955 11 18.0001V20.0001C11 20.1324 11.0128 20.2617 11.0374 20.3868Z",
                fill: "currentColor",
            }
            path {
                d: "M23 16V2.04395L17 4.35164L17 16H23Z",
                fill: "currentColor",
            }
        }
    }
}
