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
                d: "m26,29H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h20c1.657,0,3,1.343,3,3v20c0,1.657-1.343,3-3,3Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
