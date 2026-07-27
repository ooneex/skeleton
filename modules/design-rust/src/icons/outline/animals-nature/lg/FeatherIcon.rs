use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FeatherIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FeatherIcon(props: FeatherIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M26 22L6 42",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M30.8362 26.9331L40.0882 20.649C41.2423 16.5014 41.9051 11.6198 42 6C16.0093 6.43541 5.71765 18.9953 11.6135 36.3879C22.5875 40.1084 31.633 37.3759 36.9274 28.3286L30.8362 26.9331Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
