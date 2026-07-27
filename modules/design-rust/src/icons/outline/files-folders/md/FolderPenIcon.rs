use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FolderPenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FolderPenIcon(props: FolderPenIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M30 12V11C30 9.34315 28.6569 8 27 8H17.4L13.2 4H5C3.34315 4 2 5.34315 2 7V24C2 25.6569 3.34315 27 5 27H14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21.9298 28.6662L30.2022 20.3939C31.1952 19.4009 31.1952 17.7909 30.2022 16.7979C29.2092 15.8049 27.5992 15.8049 26.6063 16.7979L18.3338 25.0702L18 28.9999L21.9298 28.6662Z",
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
