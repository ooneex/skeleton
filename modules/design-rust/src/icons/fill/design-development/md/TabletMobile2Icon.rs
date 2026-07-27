use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TabletMobile2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TabletMobile2Icon(props: TabletMobile2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m14,27v-11c0-3.309,2.691-6,6-6h4v-5c0-2.206-1.794-4-4-4H6c-2.206,0-4,1.794-4,4v19c0,2.206,1.794,4,4,4h8.09c-.055-.326-.09-.659-.09-1Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "16",
                y: "12",
                width: "14",
                height: "19",
                rx: "4",
                ry: "4",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
