use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FolderOpenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FolderOpenIcon(props: FolderOpenIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20.8199 22L23.2199 10L0.780273 10L3.18027 22L20.8199 22Z",
                fill: "currentColor",
            }
            path {
                d: "M2 4C2 2.34315 3.34315 1 5 1H10.9142L13.9142 4H19C20.6569 4 22 5.34315 22 7V8H12H2V4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
