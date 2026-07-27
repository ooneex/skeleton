use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct JudaismIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn JudaismIcon(props: JudaismIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11.9999 21.818L16.2779 14.409L20.5549 7H11.9999H3.44495L7.72195 14.409L11.9999 21.818Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M11.9999 2.18201L16.2779 9.59101L20.5549 17H11.9999H3.44495L7.72195 9.59101L11.9999 2.18201Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                fill: "none",
            }
        }
    }
}
