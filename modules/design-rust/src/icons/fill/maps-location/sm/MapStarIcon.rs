use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MapStarIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MapStarIcon(props: MapStarIconProps) -> Element {
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
                d: "M17.0003 10.5029L19.0522 14.6332L23.6595 15.2983L20.3254 18.5257L21.1105 23.0722L16.9999 20.926L12.8879 23.0722L13.6745 18.5256L10.3406 15.2984L14.947 14.6332L17.0003 10.5029Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M11.3001 20.5182L9 19.3681V16.7844L11.5235 19.2271L11.3001 20.5182Z",
                fill: "currentColor",
            }
            path {
                d: "M15 10.0341L13.6231 12.8038L10.0548 13.3191C9.65397 13.377 9.28919 13.5532 9 13.8144V1.63208L15 4.63208L15 10.0341Z",
                fill: "currentColor",
            }
            path {
                d: "M16.9999 8.50296C17.7592 8.50307 18.4536 8.93314 18.7914 9.61314L20.3764 12.8037L22.9999 13.1824V2.04395L16.9999 4.35164L16.9999 8.50296Z",
                fill: "currentColor",
            }
        }
    }
}
