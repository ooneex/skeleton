use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RectLoginIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RectLoginIcon(props: RectLoginIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M42 8C42 4.68629 39.3137 2 36 2H24C20.6863 2 18 4.68629 18 8V22.5H22V14L34 24L22 34V25.5H18V40C18 43.3137 20.6863 46 24 46H36C39.3137 46 42 43.3137 42 40V8Z",
                fill: "currentColor",
            }
            path {
                d: "M4 22.5H18V25.5H4V22.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
