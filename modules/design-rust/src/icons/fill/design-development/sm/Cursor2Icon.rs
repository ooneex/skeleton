use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Cursor2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Cursor2Icon(props: Cursor2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19.3355 19.25C18.369 20.2165 16.802 20.2165 15.8355 19.25L11.0647 14.4793L6.94489 18.4028L3.12561 3.12549L18.4029 6.94481L14.5647 10.9793L19.3355 15.75C20.302 16.7165 20.302 18.2835 19.3355 19.25Z",
                fill: "currentColor",
            }
        }
    }
}
