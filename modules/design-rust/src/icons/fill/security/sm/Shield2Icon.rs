use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Shield2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Shield2Icon(props: Shield2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m13,11h9V3h-1c-2.694,0-5.254-.537-8-1.668v9.668Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m11,1.332c-2.746,1.131-5.306,1.668-8,1.668h-1v8h9V1.332Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m13,13v9.744c2.103-.698,7.84-3.193,8.838-9.744h-8.838Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m11,13H2.162c.999,6.551,6.735,9.046,8.838,9.744v-9.744Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
