use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextColor2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextColor2Icon(props: TextColor2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17.8906 19H9.5H10",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6.11921 28H6L15.3333 4H16H16.6667L21.0574 15.2903",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 18C26 20 28 22.5 28 24.6328C28 27.0446 26.209 29 24 29C21.791 29 20 27.0446 20 24.6328C20 22.2209 22 20 24 18Z",
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
