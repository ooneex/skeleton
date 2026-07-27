use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VirtualSpaceIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VirtualSpaceIcon(props: VirtualSpaceIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10 20.4812C11.8185 20.1726 13.8528 20 16 20C18.1472 20 20.1815 20.1726 22 20.4812",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M2 8C2 5.23858 8.26801 3 16 3C23.732 3 30 5.23858 30 8M2 8C2 9.99457 5.27011 11.7164 10 12.5188V28.5188C5.27011 27.7164 2 25.9946 2 24V8ZM30 8C30 9.99457 26.7299 11.7164 22 12.5188V28.5188C26.7299 27.7164 30 25.9946 30 24V8Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
