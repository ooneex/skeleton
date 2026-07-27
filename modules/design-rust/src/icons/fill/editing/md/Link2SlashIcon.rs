use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Link2SlashIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Link2SlashIcon(props: Link2SlashIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m28,25h-7c-2.206,0-4-1.794-4-4v-2h2v2c0,1.103.897,2,2,2h7c1.103,0,2-.897,2-2v-10c0-.763-.425-1.449-1.107-1.79l-.895-.447.895-1.789.895.447c1.365.683,2.213,2.054,2.213,3.579v10c0,2.206-1.794,4-4,4Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m19,14h-2v-3c0-2.206,1.794-4,4-4h3v2h-3c-1.103,0-2,.897-2,2v3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m8.415,25h-4.415c-2.206,0-4-1.794-4-4v-10c0-2.206,1.794-4,4-4h7c2.206,0,4,1.794,4,4v2h-2v-2c0-1.103-.897-2-2-2h-7c-1.103,0-2,.897-2,2v10c0,1.103.897,2,2,2h3.585l.81-.81,1.415,1.413-1.395,1.397Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "15.562 17.852 14.711 17 9 17 9 15 18.414 15 15.562 17.852",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "-4.799",
                y: "15",
                width: "41.598",
                height: "2",
                transform: "translate(-6.627 16) rotate(-45)",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
