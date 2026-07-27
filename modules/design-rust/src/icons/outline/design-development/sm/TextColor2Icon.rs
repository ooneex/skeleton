use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextColor2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextColor2Icon(props: TextColor2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4.73495 21H4.5L11.5 3H12.5L15.7072 11.247",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12.781 14L7 14H7.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M18 14.5C19.746 15.7738 21 17.2238 21 18.9231C21 20.6223 19.6568 22 18 22C16.3432 22 15 20.6223 15 18.9231C15 17.2238 16.254 15.7738 18 14.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
