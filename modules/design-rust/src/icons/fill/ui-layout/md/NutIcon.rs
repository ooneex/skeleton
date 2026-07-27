use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NutIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NutIcon(props: NutIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m23.559,2h-15.117L-.174,16l8.615,14h15.117l8.615-14L23.559,2Zm-7.559,20c-3.314,0-6-2.686-6-6s2.686-6,6-6,6,2.686,6,6-2.686,6-6,6Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
