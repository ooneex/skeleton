use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleLogoutIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleLogoutIcon(props: CircleLogoutIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 16L3 24L11 32",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M36 24L3 24L3.66817 24",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M19.3934 34.6066C25.2513 40.4645 34.7487 40.4645 40.6066 34.6066C46.4645 28.7487 46.4645 19.2513 40.6066 13.3934C34.7487 7.53554 25.2513 7.53554 19.3934 13.3934",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
