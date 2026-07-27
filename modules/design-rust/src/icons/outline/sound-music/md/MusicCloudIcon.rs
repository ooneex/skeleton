use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MusicCloudIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MusicCloudIcon(props: MusicCloudIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10 26H7C3.686 26 1 23.314 1 20C1 17.386 2.675 15.168 5.008 14.346C5.091 8.619 9.753 4 15.5 4C19.4257 4 22.8483 6.15439 24.6498 9.34538",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M20 25.5333V26V14.8L30 12V23V22.5333",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M17 29C18.6569 29 20 27.6569 20 26C20 24.3431 18.6569 23 17 23C15.3431 23 14 24.3431 14 26C14 27.6569 15.3431 29 17 29Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M27 26C28.6569 26 30 24.6569 30 23C30 21.3431 28.6569 20 27 20C25.3431 20 24 21.3431 24 23C24 24.6569 25.3431 26 27 26Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
