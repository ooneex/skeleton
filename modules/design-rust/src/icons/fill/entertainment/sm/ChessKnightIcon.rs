use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChessKnightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChessKnightIcon(props: ChessKnightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7 1.00001C11.6721 0.993786 15.8293 3.22409 17.5312 7.45607C18.4249 9.67832 18.7193 13.1401 18.3779 15.544C18.3079 16.0371 18.2082 16.5228 18.0869 17H6.44629C8.30499 14.2166 11.0598 12.5004 9 8.50001L4 11L2 8.00001L7 3.00001V1.00001Z",
                fill: "currentColor",
            }
            path {
                d: "M21 23H3V21.5C3 20.1193 4.11929 19 5.5 19H18.5C19.8807 19 21 20.1193 21 21.5V23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
