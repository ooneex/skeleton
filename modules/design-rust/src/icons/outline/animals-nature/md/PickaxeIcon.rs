use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PickaxeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PickaxeIcon(props: PickaxeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M23.9141 10.6718L28.3282 7.32822L26.5 5.5L24.6718 3.67178L21.3282 8.0859",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M15.0408 13.9518L2.04826 26.0483L4.00001 28.0001L5.95176 29.9518L18.0483 16.9593",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M28.0991 21.548L10.452 3.91437L11.8193 2.54804C15.7252 4.0005 19.5556 6.56198 22.5 9.50917C25.4444 12.4564 28.005 16.2908 29.452 20.1962L28.0991 21.548Z",
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
