use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RulerTriangleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RulerTriangleIcon(props: RulerTriangleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2 12V9H6V7H2V0.585693L23.4142 21.9999H2V19H6V17H2V14H5V12H2Z",
                fill: "currentColor",
            }
        }
    }
}
