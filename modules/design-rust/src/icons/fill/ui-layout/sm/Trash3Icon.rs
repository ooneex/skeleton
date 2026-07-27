use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Trash3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Trash3Icon(props: Trash3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m4.458,9l.463,11.125c.067,1.612,1.384,2.875,2.998,2.875h8.163c1.613,0,2.93-1.263,2.998-2.875l.463-11.125H4.458Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m16,5V1h-8v4H2v2h20v-2h-6Zm-6-2h4v2h-4v-2Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
