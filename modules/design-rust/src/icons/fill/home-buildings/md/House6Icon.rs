use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct House6IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn House6Icon(props: House6IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "30.168 14.404 16 3.272 1.832 14.404 .596 12.832 16 .728 31.404 12.832 30.168 14.404",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m16,5.815L4,15.244v10.756c0,2.206,1.794,4,4,4h5v-9h6v9h5c2.206,0,4-1.794,4-4v-10.756l-12-9.429Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
