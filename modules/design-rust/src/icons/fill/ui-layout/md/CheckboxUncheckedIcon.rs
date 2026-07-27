use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CheckboxUncheckedIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CheckboxUncheckedIcon(props: CheckboxUncheckedIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m26,30H6c-2.206,0-4-1.794-4-4V6c0-2.206,1.794-4,4-4h20c2.206,0,4,1.794,4,4v20c0,2.206-1.794,4-4,4ZM6,4c-1.103,0-2,.897-2,2v20c0,1.103.897,2,2,2h20c1.103,0,2-.897,2-2V6c0-1.103-.897-2-2-2H6Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
