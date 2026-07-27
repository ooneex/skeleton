use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Clone3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Clone3Icon(props: Clone3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m19.5,22h-11c-1.379,0-2.5-1.122-2.5-2.5v-2.5h2v2.5c0,.276.225.5.5.5h11c.275,0,.5-.224.5-.5v-11c0-.276-.225-.5-.5-.5h-2.5v-2h2.5c1.379,0,2.5,1.122,2.5,2.5v11c0,1.378-1.121,2.5-2.5,2.5Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2",
                y: "2",
                width: "16",
                height: "16",
                rx: "2.5",
                ry: "2.5",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
