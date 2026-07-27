use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ClonePlusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ClonePlusIcon(props: ClonePlusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m19.5,22h-11c-1.378,0-2.5-1.122-2.5-2.5v-2.5h2v2.5c0,.276.224.5.5.5h11c.276,0,.5-.224.5-.5v-11c0-.276-.224-.5-.5-.5h-2.5v-2h2.5c1.378,0,2.5,1.122,2.5,2.5v11c0,1.378-1.122,2.5-2.5,2.5Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m15.5,2H4.5c-1.378,0-2.5,1.122-2.5,2.5v11c0,1.378,1.122,2.5,2.5,2.5h11c1.378,0,2.5-1.122,2.5-2.5V4.5c0-1.378-1.122-2.5-2.5-2.5Zm-1.5,9h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
