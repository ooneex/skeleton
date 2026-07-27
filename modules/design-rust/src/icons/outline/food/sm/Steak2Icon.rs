use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Steak2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Steak2Icon(props: Steak2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9.70398 9.70398L14.9081 14.9081",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M6.23004 13.23L10.9579 17.9579",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14.2979 7.29791L16.3394 9.33944",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M2 14.5C2 18.6421 5.35786 22 9.5 22C19.2669 22 18.5156 15.5706 20.5394 9.10982C21.7147 5.35756 19.8755 3 16.1758 3C11.9233 3 6.82138 6.36589 3.95721 9.50919C2.75188 10.832 2 12.5783 2 14.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
