use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MarkdownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MarkdownIcon(props: MarkdownIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M23 16.4999V10.9999",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M31 26L31 6L1 6L0.999999 26L31 26Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M19.9695 16.495L23 20.5357L26.0305 16.495",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M19.9695 16.495L23 20.5357L26.0305 16.495L19.9695 16.495Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M6 21V11H7.125L10.5 15.8148L13.875 11H15V21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
