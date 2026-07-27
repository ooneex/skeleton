use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareUserSparkleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareUserSparkleIcon(props: SquareUserSparkleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 26V6C30 3.79086 28.2091 2 26 2H6C3.79086 2 2 3.79086 2 6L2 26C2 28.2091 3.79086 30 6 30H26C28.2091 30 30 28.2091 30 26ZM18.25 10.75L16 5.5L13.75 10.75L8.49998 13L13.75 15.25L16 20.5L18.25 15.25L23.5 13L18.25 10.75ZM6.39093 28H25.609C24.3511 23.9389 20.5173 21 16 21C11.4827 21 7.64886 23.9389 6.39093 28Z",
                fill: "currentColor",
            }
        }
    }
}
