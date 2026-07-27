use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct IdBadgeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn IdBadgeIcon(props: IdBadgeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m12,0c-1.103,0-2,.897-2,2v3h4v-3c0-1.103-.897-2-2-2Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m20,3h-4v2c0,1.104-.896,2-2,2h-4c-1.104,0-2-.896-2-2v-2h-4c-1.654,0-3,1.346-3,3v12c0,1.654,1.346,3,3,3h16c1.654,0,3-1.346,3-3V6c0-1.654-1.346-3-3-3Zm-9,13h-6v-6h6v6Zm8,0h-6v-2h6v2Zm0-4h-6v-2h6v2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
