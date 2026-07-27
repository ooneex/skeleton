use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FolderPlusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FolderPlusIcon(props: FolderPlusIconProps) -> Element {
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
                d: "M20 13V23H18V13H20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14 17H24V19H14V17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M4 2C2.34315 2 1 3.34315 1 5V18C1 19.6569 2.34315 21 4 21H14C12.8954 21 12 20.1046 12 19V17C12 15.8954 12.8954 15 14 15H16V13C16 11.8954 16.8954 11 18 11H20C21.1046 11 22 11.8954 22 13V15H23V8C23 6.34315 21.6569 5 20 5H13.4142L10.4142 2H4Z",
                fill: "currentColor",
            }
        }
    }
}
