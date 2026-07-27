use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CursorIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CursorIcon(props: CursorIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M35.7464 41.325L21.3436 26.9221L13.4497 34.9925L6.64697 6.64673L34.9926 13.4498L26.9221 21.3436L41.3249 35.7465L35.7464 41.325Z",
                fill: "currentColor",
            }
        }
    }
}
