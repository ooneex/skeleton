use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PhotoEditorIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PhotoEditorIcon(props: PhotoEditorIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 28C16.8203 28 11 22.1797 11 15C11 7.8203 16.8203 2 24 2C31.1797 2 37 7.8203 37 15C37 22.1797 31.1797 28 24 28Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M33 43C25.8203 43 20 37.1797 20 30C20 22.8203 25.8203 17 33 17C40.1797 17 46 22.8203 46 30C46 37.1797 40.1797 43 33 43Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15 43C7.8203 43 2 37.1797 2 30C2 22.8203 7.8203 17 15 17C22.1797 17 28 22.8203 28 30C28 37.1797 22.1797 43 15 43Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
