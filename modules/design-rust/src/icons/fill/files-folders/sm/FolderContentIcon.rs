use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FolderContentIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FolderContentIcon(props: FolderContentIconProps) -> Element {
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
                d: "M2 9C2 7.34315 3.34315 6 5 6H10.6454L13.3454 9H19C20.6569 9 22 10.3431 22 12V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V9Z",
                fill: "currentColor",
            }
            path {
                d: "M3 4.41604C3.61246 4.14845 4.2889 4 5 4H10.6454C11.2123 4 11.7527 4.24064 12.132 4.66207L14.2361 7H19C19.7111 7 20.3875 7.14845 21 7.41604V2H3V4.41604Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
