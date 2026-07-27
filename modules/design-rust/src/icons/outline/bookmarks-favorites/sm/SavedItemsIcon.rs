use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SavedItemsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SavedItemsIcon(props: SavedItemsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polyline {
                points: "15 3 15 11 12 8.5 9 11 9 3",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            path {
                d: "m5,3h14c1.105,0,2,.895,2,2v14c0,1.105-.895,2-2,2H5c-1.105,0-2-.895-2-2V5c0-1.105.895-2,2-2Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
