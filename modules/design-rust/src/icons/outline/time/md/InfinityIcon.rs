use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct InfinityIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn InfinityIcon(props: InfinityIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m13.1,13c-1.854-1.722-3.819-3-6.1-3-3.314,0-6,2.686-6,6s2.686,6,6,6c7,0,11-12,18-12,3.314,0,6,2.686,6,6s-2.686,6-6,6c-2.284,0-4.249-1.278-6.1-3",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
