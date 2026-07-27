use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BadgeCheck2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BadgeCheck2Icon(props: BadgeCheck2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10 17.25L13.75 21L21.5 12.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M25.5464 19.9536L29.5 16L25.5464 12.0464V6.45358H19.9536L16 2.5L12.0464 6.45358H6.45358V12.0464L2.5 16L6.45358 19.9536V25.5464H12.0464L16 29.5L19.9536 25.5464H25.5464V19.9536Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
