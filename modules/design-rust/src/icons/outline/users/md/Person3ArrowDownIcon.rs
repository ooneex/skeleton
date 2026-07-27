use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Person3ArrowDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Person3ArrowDownIcon(props: Person3ArrowDownIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 7C9.342 7 8 5.658 8 4C8 2.342 9.342 1 11 1C12.658 1 14 2.342 14 4C14 5.658 12.658 7 11 7Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M26 11V24.5V23.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M30 20.5L26 24.5L22 20.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M4.5 25.225L6.82336 13.434C7.21654 11.4386 8.96624 10 11 10C13.0338 10 14.7835 11.4386 15.1766 13.434L17.5 25.225L14.5 26.275L14 31H8L7.5 26.275L4.5 25.225Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
