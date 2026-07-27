use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PopsicleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PopsicleIcon(props: PopsicleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21 39V43C21 44.6569 22.3431 46 24 46V46C25.6569 46 27 44.6569 27 43V39",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M27 34V15.5C27 14.1193 28.1193 13 29.5 13V13C30.8807 13 32 14.1193 32 15.5V34",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M16 34V15.5C16 14.1193 17.1193 13 18.5 13V13C19.8807 13 21 14.1193 21 15.5V34",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M11 34V16C11 8.8203 16.8203 3 24 3C31.1797 3 37 8.8203 37 16V34H11Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
