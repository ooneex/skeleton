use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BellSlashIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BellSlashIcon(props: BellSlashIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m25.107,6.893c-1.571-3.469-5.058-5.893-9.107-5.893-5.514,0-10,4.486-10,10v10c0,1.654-1.346,3-3,3v2h3L25.107,6.893Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m26,21v-10c0-.243-.019-.482-.036-.721l-15.721,15.721h18.758v-2c-1.654,0-3-1.346-3-3Z",
                stroke_width: "0",
                fill: "currentColor",
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
            path {
                d: "m12.142,28c.447,1.72,2,3,3.858,3s3.411-1.28,3.858-3h-7.716Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
