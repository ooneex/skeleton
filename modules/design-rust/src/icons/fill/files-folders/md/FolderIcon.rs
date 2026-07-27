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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5 3C2.79086 3 1 4.79086 1 7V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V11C31 8.79086 29.2091 7 27 7H17.8L13.6 3H5Z",
                fill: "currentColor",
            }
        }
    }
}
