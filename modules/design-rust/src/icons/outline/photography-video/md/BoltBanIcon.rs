use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BoltBanIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BoltBanIcon(props: BoltBanIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21.5 28.5L28.5 21.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14.5 3.5L2.5 17.4977H11.1667L10.5 26.5L22.5 12.5023H13.8333L14.5 3.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M25 30C27.7614 30 30 27.7614 30 25C30 22.2386 27.7614 20 25 20C22.2386 20 20 22.2386 20 25C20 27.7614 22.2386 30 25 30Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
