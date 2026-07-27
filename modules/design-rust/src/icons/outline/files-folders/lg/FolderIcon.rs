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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 10V36C3 38.7614 5.23858 41 8 41H40C42.7614 41 45 38.7614 45 36V16C45 13.2386 42.7614 11 40 11H27L19 5H8C5.23858 5 3 7.23858 3 10Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
