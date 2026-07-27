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
            path {
                d: "m19,2H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V5c0-1.654-1.346-3-3-3Zm-3,12l-4-3.333-4,3.333V4h8v10Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
