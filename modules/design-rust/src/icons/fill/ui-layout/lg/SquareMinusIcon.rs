use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareMinusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareMinusIcon(props: SquareMinusIconProps) -> Element {
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
                d: "M4 10C4 6.68629 6.68629 4 10 4H38C41.3137 4 44 6.68629 44 10V38C44 41.3137 41.3137 44 38 44H10C6.68629 44 4 41.3137 4 38V10ZM34 22.5H14V25.5H34V22.5Z",
                fill: "currentColor",
            }
        }
    }
}
