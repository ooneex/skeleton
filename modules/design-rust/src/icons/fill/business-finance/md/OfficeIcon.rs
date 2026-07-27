use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct OfficeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn OfficeIcon(props: OfficeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 17H12L12 30H2V17ZM6.01001 21H8.01001V26H6.01001V21Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 4.96922L20 1.71922V9.1459L13.1056 12.5931C12.428 12.9319 12 13.6244 12 14.382V15H7V4.96922ZM15 7V10H12V7H15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14 14.382L30 6.38196L30 30L14 30V14.382ZM21.01 18V21H18L18 18H21.01ZM23 16L23 26L26 26L26 16L23 16ZM21.01 23V26H18L18 23H21.01Z",
                fill: "currentColor",
            }
        }
    }
}
