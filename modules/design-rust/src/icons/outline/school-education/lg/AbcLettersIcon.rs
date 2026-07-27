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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20 2H25C28.3137 2 31 4.68629 31 8V22H22C18.6863 22 16 19.3137 16 16V16C16 12.6863 18.6863 10 22 10H30.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M4.99997 17V43H13.5C17.6421 43 21 39.6421 21 35.5V35.5C21 31.3579 17.6421 28 13.5 28H5.99997",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M43 45H37C32.5817 45 29 41.4183 29 37V36C29 31.5817 32.5817 28 37 28H43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
