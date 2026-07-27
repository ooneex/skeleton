use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AlbumIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AlbumIcon(props: AlbumIconProps) -> Element {
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
                d: "M1 15H6V17H1V15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 7H6V9H1V7Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 23H6V25H1V23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19.9515 9.95996L23 13.3134L23 17H14.3195L19.9515 9.95996Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 11.5C12 10.6716 12.6716 10 13.5 10C14.3284 10 15 10.6716 15 11.5C15 12.3284 14.3284 13 13.5 13C12.6716 13 12 12.3284 12 11.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 30V2H30V30H4ZM25 7H9V19H25V7Z",
                fill: "currentColor",
            }
        }
    }
}
