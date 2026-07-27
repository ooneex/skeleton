use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MobileDockIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MobileDockIcon(props: MobileDockIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M36 33L45 33L45 40C45 42.7614 42.7614 45 40 45L8 45C5.23858 45 3 42.7614 3 40L3 33L12 33",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M17 39L31 39C33.7614 39 36 36.7614 36 34L36 8C36 5.23858 33.7614 3 31 3L17 3C14.2386 3 12 5.23858 12 8L12 34C12 36.7614 14.2386 39 17 39Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M26.5 9L21.5 9C21.2239 9 21 8.77614 21 8.5C21 8.22386 21.2239 8 21.5 8L26.5 8C26.7761 8 27 8.22386 27 8.5C27 8.77614 26.7761 9 26.5 9Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
