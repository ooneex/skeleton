use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MakeupMirrorIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MakeupMirrorIcon(props: MakeupMirrorIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M26 19.4999L32.5777 12.9222L32.2013 13.2986",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21.5 16.5L15.1703 22.8297L15.5468 22.4532",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M39 18C39 26.2843 32.2843 33 24 33C15.7157 33 9 26.2843 9 18C9 9.71573 15.7157 3 24 3C32.2843 3 39 9.71573 39 18Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M34 18C34 23.5228 29.5228 28 24 28C18.4772 28 14 23.5228 14 18C14 12.4772 18.4772 8 24 8C29.5228 8 34 12.4772 34 18Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M40 36.5V41.5C40 43.433 32.8366 45 24 45C15.1634 45 8 43.433 8 41.5V36.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M40 36.5C40 38.433 32.8366 40 24 40C15.1634 40 8 38.433 8 36.5C8 34.567 15.1634 33 24 33C32.8366 33 40 34.567 40 36.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
