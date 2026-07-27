use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PhotoFrameIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PhotoFrameIcon(props: PhotoFrameIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 24C19.3137 24 22 20.4183 22 16C22 11.5817 19.3137 8 16 8C12.6863 8 10 11.5817 10 16C10 20.4183 12.6863 24 16 24Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M27 25.7576V6.24242C24.4689 6.24242 22.4167 4.34288 22.4167 2H9.58333C9.58333 4.34288 7.53115 6.24242 5 6.24242V25.7576C7.53115 25.7576 9.58333 27.6571 9.58333 30H22.4167C22.4167 27.6571 24.4689 25.7576 27 25.7576Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
