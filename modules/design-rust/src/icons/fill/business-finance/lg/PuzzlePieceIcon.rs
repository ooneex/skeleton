use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PuzzlePieceIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PuzzlePieceIcon(props: PuzzlePieceIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M46 24C46 20.7713 43.3734 18.1538 40.1333 18.1538V5H29.8667C29.8667 8.22874 27.2401 10.8462 24 10.8462C20.7599 10.8462 18.1333 8.22874 18.1333 5H7.86667V18.1538C4.6266 18.1538 2 20.7713 2 24C2 27.2287 4.6266 29.8462 7.86667 29.8462L7.86667 43H18.1333C18.1333 39.7713 20.7599 37.1538 24 37.1538C27.2401 37.1538 29.8667 39.7713 29.8667 43H40.1333V29.8462C43.3734 29.8462 46 27.2287 46 24Z",
                fill: "currentColor",
            }
        }
    }
}
