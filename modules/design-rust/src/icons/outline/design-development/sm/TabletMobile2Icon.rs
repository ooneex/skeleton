use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TabletMobile2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TabletMobile2Icon(props: TabletMobile2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m8,20h-3c-1.105,0-2-.895-2-2V4c0-1.105.895-2,2-2h9c1.105,0,2,.895,2,2v5",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            rect {
                x: "12",
                y: "9",
                width: "9",
                height: "13",
                rx: "2",
                ry: "2",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}
