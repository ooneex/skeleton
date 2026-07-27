use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareSlidersIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareSlidersIcon(props: SquareSlidersIconProps) -> Element {
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
                d: "M10 4H38C41.3137 4 44 6.68629 44 10V38C44 41.3137 41.3137 44 38 44H10C6.68629 44 4 41.3137 4 38V10C4 6.68629 6.68629 4 10 4ZM31 10V18H34V15.5H38V12.5H34V10H31ZM28 12.5L10 12.5V15.5L28 15.5V12.5ZM14 25.5V28H17V20H14V22.5H10V25.5H14ZM38 22.5H20V25.5H38V22.5ZM28 32.5H10V35.5H28V32.5ZM38 32.5H34V30H31V38H34V35.5H38V32.5Z",
                fill: "currentColor",
            }
        }
    }
}
