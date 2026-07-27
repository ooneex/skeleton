use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Tablet2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Tablet2Icon(props: Tablet2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 29.5L12 29L20 29L20 29.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7.00003 6.75C7.00003 5.7835 7.78353 5 8.75003 5C9.71653 5 10.5 5.7835 10.5 6.75C10.5 7.7165 9.71653 8.5 8.75003 8.5C7.78353 8.5 7.00003 7.7165 7.00003 6.75Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M25 2H7C5.34315 2 4 3.34315 4 5V27C4 28.6569 5.34315 30 7 30H25C26.6569 30 28 28.6569 28 27V5C28 3.34315 26.6569 2 25 2Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
