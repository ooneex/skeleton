use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MediaPlaylistIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MediaPlaylistIcon(props: MediaPlaylistIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "21",
                y: "24",
                width: "11",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "21",
                y: "29",
                width: "11",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m16,31c-8.271,0-15-6.729-15-15S7.729,1,16,1s15,6.729,15,15v1h-2v-1c0-7.168-5.832-13-13-13S3,8.832,3,16s5.832,13,13,13c.564,0,1.159-.048,1.872-.151l.99-.143.286,1.979-.99.143c-.811.117-1.496.171-2.158.171Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "21",
                y: "19",
                width: "11",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            polygon {
                points: "11 9.3 11 22.7 23.059 16 11 9.3",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
