use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MapCompassIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MapCompassIcon(props: MapCompassIconProps) -> Element {
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
                d: "M21.6463 20.6463L23.8341 11.1658L14.3536 13.3536L12.1658 22.8341L21.6463 20.6463ZM19.2499 16.9999C19.2499 17.6903 18.6903 18.2499 17.9999 18.2499C17.3096 18.2499 16.7499 17.6903 16.7499 16.9999C16.7499 16.3096 17.3096 15.7499 17.9999 15.7499C18.6903 15.7499 19.2499 16.3096 19.2499 16.9999Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M10.7152 20.2258L9 19.3681V1.63208L15 4.63208L15 11.152L13.9039 11.405C13.1587 11.5769 12.5768 12.1588 12.4049 12.904L10.7152 20.2258Z",
                fill: "currentColor",
            }
            path {
                d: "M17 10.6904L23 9.30575V2.04395L17 4.35164L17 10.6904Z",
                fill: "currentColor",
            }
        }
    }
}
