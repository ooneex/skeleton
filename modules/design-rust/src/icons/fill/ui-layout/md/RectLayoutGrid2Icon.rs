use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RectLayoutGrid2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RectLayoutGrid2Icon(props: RectLayoutGrid2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "2",
                y: "11",
                width: "19",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2",
                y: "19",
                width: "19",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m27,3H5c-2.206,0-4,1.794-4,4v18c0,2.206,1.794,4,4,4h22c2.206,0,4-1.794,4-4V7c0-2.206-1.794-4-4-4ZM3,25V7c0-1.103.897-2,2-2h15v22H5c-1.103,0-2-.897-2-2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
