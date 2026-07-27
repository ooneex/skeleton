use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PillBottleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PillBottleIcon(props: PillBottleIconProps) -> Element {
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
                d: "M44 15H4V4H44V15ZM9 12H12V7H9V12ZM18 12H21V7H18V12ZM27 7V12H30V7H27ZM36 12H39V7H36V12Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M42 38C42 41.3137 39.3137 44 36 44H12C8.68629 44 6 41.3137 6 38V18H42V38ZM21 22V28H15V34H21V40H27V34H33V28H27V22H21Z",
                fill: "currentColor",
            }
        }
    }
}
