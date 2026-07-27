use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TagMinusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TagMinusIcon(props: TagMinusIconProps) -> Element {
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
                d: "M13 4H23V6H13V4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18.914 8L22.121 11.207C23.291 12.377 23.291 14.28 22.121 15.45L15.45 22.121C14.865 22.706 14.096 22.998 13.328 22.998C12.56 22.998 11.792 22.706 11.207 22.121L2 12.914V2H12.914L12.9157 2.00174C11.8503 2.0459 11 2.92366 11 4V6C11 7.10457 11.8954 8 13 8H18.914ZM7 8.5C7 9.327 7.673 10 8.5 10C9.327 10 10 9.327 10 8.5C10 7.673 9.327 7 8.5 7C7.673 7 7 7.673 7 8.5Z",
                fill: "currentColor",
            }
        }
    }
}
