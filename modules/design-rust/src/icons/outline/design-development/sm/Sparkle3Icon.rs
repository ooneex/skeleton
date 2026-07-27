use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Sparkle3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Sparkle3Icon(props: Sparkle3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 4L14.5263 9.47368L20 12L14.5263 14.5263L12 20L9.47368 14.5263L4 12L9.47368 9.47368L12 4Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M5.55 3.45L4.5 1L3.45 3.45L1 4.5L3.45 5.55L4.5 8L5.55 5.55L8 4.5L5.55 3.45Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
        }
    }
}
