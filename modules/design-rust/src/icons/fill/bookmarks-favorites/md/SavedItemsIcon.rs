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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m26,2H6c-2.206,0-4,1.794-4,4v20c0,2.206,1.794,4,4,4h20c2.206,0,4-1.794,4-4V6c0-2.206-1.794-4-4-4Zm-5,16l-5-4-5,4V4h10v14Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
