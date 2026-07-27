use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowDiagonalIn2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowDiagonalIn2Icon(props: ArrowDiagonalIn2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M44 27H27V44H30V32.1212L43.5001 45.6213L45.6214 43.5L32.1214 30H44V27Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 10.5C4 6.91015 6.91015 4 10.5 4H37.5C41.0899 4 44 6.91015 44 10.5V24H26.5C25.1193 24 24 25.1193 24 26.5V44H10.5C6.91015 44 4 41.0899 4 37.5V10.5Z",
                fill: "currentColor",
            }
        }
    }
}
