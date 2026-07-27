use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AbcLettersIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AbcLettersIcon(props: AbcLettersIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13 2H17C19.2091 2 21 3.79086 21 6V14H14.5C12.567 14 11 12.433 11 10.5V10.5C11 8.567 12.567 7 14.5 7H20.3571",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M3 11V29H8.54167C11.5562 29 14 26.5562 14 23.5417V23.5417C14 20.5271 11.5562 18.0833 8.54167 18.0833H3.71428",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M29 30H26C22.6863 30 20 27.3137 20 24V24C20 20.6863 22.6863 18 26 18H29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
