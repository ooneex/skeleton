use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Person3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Person3Icon(props: Person3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 7C14.342 7 13 5.658 13 4C13 2.342 14.342 1 16 1C17.658 1 19 2.342 19 4C19 5.658 17.658 7 16 7Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9.5 25.225L11.8234 13.434C12.2165 11.4386 13.9662 10 16 10C18.0338 10 19.7835 11.4386 20.1766 13.434L22.5 25.225L19.5 26.275L19 31H13L12.5 26.275L9.5 25.225Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
