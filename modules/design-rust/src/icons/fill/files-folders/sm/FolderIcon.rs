use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FolderIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FolderIcon(props: FolderIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4 2C2.34315 2 1 3.34315 1 5V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V8C23 6.34315 21.6569 5 20 5H13.4142L10.4142 2H4Z",
                fill: "currentColor",
            }
        }
    }
}
