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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10 4H38C41.3137 4 44 6.68629 44 10V38C44 41.3137 41.3137 44 38 44H10C6.68629 44 4 41.3137 4 38V10C4 6.68629 6.68629 4 10 4ZM32.5 7H15.5V29.0806L24 22.2806L32.5 29.0806V7Z",
                fill: "currentColor",
            }
        }
    }
}
