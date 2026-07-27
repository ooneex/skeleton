use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct IdBadge3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn IdBadge3Icon(props: IdBadge3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m20,3h-2c0,1.105-.895,2-2,2s-2-.895-2-2h-4c0,1.105-.895,2-2,2s-2-.895-2-2h-2c-1.657,0-3,1.343-3,3v12c0,1.657,1.343,3,3,3h16c1.657,0,3-1.343,3-3V6c0-1.657-1.343-3-3-3Zm-9,13h-6v-6h6v6Zm8,0h-6v-2h6v2Zm0-4h-6v-2h6v2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
