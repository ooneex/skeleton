use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShareRight2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShareRight2Icon(props: ShareRight2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m17,22H4c-1.654,0-3-1.346-3-3V6c0-1.654,1.346-3,3-3h4v2h-4c-.551,0-1,.449-1,1v13c0,.551.449,1,1,1h13c.551,0,1-.449,1-1v-3h2v3c0,1.654-1.346,3-3,3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m24.101,9L14,.919v4.109c-5.894.341-9,3.771-9,9.972v2.759l1.768-2.119c1.33-1.595,2.927-2.509,7.232-2.627v4.067l10.101-8.081Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
