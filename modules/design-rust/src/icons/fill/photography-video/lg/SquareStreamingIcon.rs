use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareStreamingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareStreamingIcon(props: SquareStreamingIconProps) -> Element {
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
                d: "M4 10C4 6.68629 6.68629 4 10 4H38C41.3137 4 44 6.68629 44 10V38C44 41.3137 41.3137 44 38 44H10C6.68629 44 4 41.3137 4 38V10ZM12 33V36H27V33H12ZM30 33H36V36H30V33ZM33.0156 19.5L19.5 11.7768V27.2232L33.0156 19.5Z",
                fill: "currentColor",
            }
        }
    }
}
