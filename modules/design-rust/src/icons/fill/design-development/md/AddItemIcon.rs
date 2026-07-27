use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AddItemIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AddItemIcon(props: AddItemIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "32 4 28 4 28 0 26 0 26 4 22 4 22 6 26 6 26 10 28 10 28 6 32 6 32 4",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m26,13v8H4v-13c0-1.103.897-2,2-2h13v-2H6c-2.206,0-4,1.794-4,4v18c0,2.206,1.794,4,4,4h18c2.206,0,4-1.794,4-4v-13h-2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
