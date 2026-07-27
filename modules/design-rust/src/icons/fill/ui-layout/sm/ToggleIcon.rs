use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ToggleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ToggleIcon(props: ToggleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m16,4h-8C3.589,4,0,7.589,0,12s3.589,8,8,8h8c4.411,0,8-3.589,8-8s-3.589-8-8-8Zm-8,14c-3.308,0-6-2.692-6-6s2.692-6,6-6,6,2.692,6,6-2.692,6-6,6Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
