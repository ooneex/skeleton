use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareCaretDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareCaretDownIcon(props: SquareCaretDownIconProps) -> Element {
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
                d: "M6 2C3.79086 2 2 3.79086 2 6V26C2 28.2091 3.79086 30 6 30H26C28.2091 30 30 28.2091 30 26V6C30 3.79086 28.2091 2 26 2H6ZM16 21.5L22 12.5H10L16 21.5Z",
                fill: "currentColor",
            }
        }
    }
}
