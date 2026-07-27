use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PodiumIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PodiumIcon(props: PodiumIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2 30V18H10V30H2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M22 30V22H30V30H22Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M12 12V30H20V12H12Z",
                fill: "currentColor",
            }
            path {
                d: "M16 1L17.5456 3.96259L21 4.438L18.5 6.74412L19.09 10L16 8.46259L12.91 10L13.5 6.74412L11 4.438L14.4544 3.96259L16 1Z",
                fill: "currentColor",
            }
        }
    }
}
