use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FillLoaderIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FillLoaderIcon(props: FillLoaderIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m18,6H6c-3.309,0-6,2.691-6,6s2.691,6,6,6h12c3.309,0,6-2.691,6-6s-2.691-6-6-6ZM7,14h-2v-4h2v4Zm4,0h-2v-4h2v4Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
