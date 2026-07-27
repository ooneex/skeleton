use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CrackedEggIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CrackedEggIcon(props: CrackedEggIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4 17L7 19L10 16L13 19L16 16L19 19L22 16L25 19L28 17",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M28 18.1C28 25.0588 22.6274 30 16 30C9.37258 30 4 25.0588 4 18.1C4 11.1412 9.37258 2 16 2C22.6274 2 28 11.1412 28 18.1Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
