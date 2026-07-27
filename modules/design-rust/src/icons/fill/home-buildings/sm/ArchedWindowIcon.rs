use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArchedWindowIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArchedWindowIcon(props: ArchedWindowIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22 11C22 8.85498 21.3246 6.86772 20.1749 5.23923L14.4142 11H22Z",
                fill: "currentColor",
            }
            path {
                d: "M18.8609 3.72484L13 9.58579V1.04938C15.2595 1.27372 17.2978 2.25017 18.8609 3.72484Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M11 9.58579V1.04938C8.74045 1.27372 6.70217 2.25017 5.13904 3.72484L11 9.58579Z",
                fill: "currentColor",
            }
            path {
                d: "M9.58579 11L3.82503 5.23923C2.67535 6.86772 2 8.85498 2 11L9.58579 11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M22 22H13V13H22V22Z",
                fill: "currentColor",
            }
            path {
                d: "M2 13V22H11V13H2Z",
                fill: "currentColor",
            }
        }
    }
}
