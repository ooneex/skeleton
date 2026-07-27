use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FloppyDiskIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FloppyDiskIcon(props: FloppyDiskIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m23.414,2H6c-2.206,0-4,1.794-4,4v20c0,2.206,1.794,4,4,4h20c2.206,0,4-1.794,4-4V8.586l-6.586-6.586ZM7,4h13v8H7V4Zm18,24H7v-9h18v9Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
