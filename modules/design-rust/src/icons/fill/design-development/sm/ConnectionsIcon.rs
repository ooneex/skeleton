use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ConnectionsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ConnectionsIcon(props: ConnectionsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "14.878",
                y: "8.464",
                width: "7.071",
                height: "7.071",
                transform: "translate(-3.092 16.535) rotate(-44.999)",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "8.464",
                y: "2.05",
                width: "7.071",
                height: "7.071",
                transform: "translate(-.435 10.122) rotate(-45.002)",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2.05",
                y: "8.464",
                width: "7.071",
                height: "7.071",
                transform: "translate(-6.849 7.464) rotate(-44.999)",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "8.465",
                y: "14.879",
                width: "7.071",
                height: "7.071",
                transform: "translate(-9.506 13.879) rotate(-45.002)",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
