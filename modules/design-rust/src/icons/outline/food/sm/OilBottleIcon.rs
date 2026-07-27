use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct OilBottleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn OilBottleIcon(props: OilBottleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9 6H15",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M10.7123 22H5V9.22524C5 8.47335 5.4217 7.78499 6.09155 7.44346L8.92265 6L9.5 2L14.5 2L15 6L17.8944 7.44721C18.572 7.786 19 8.47852 19 9.23607V10.7609",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17 14.2672C18.746 15.626 20 16.9054 20 18.7179C20 20.5305 18.6568 22 17 22C15.3432 22 14 20.5305 14 18.7179C14 16.9054 15.254 15.626 17 14.2672Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M17 14.2672C18.746 15.626 20 16.9054 20 18.7179C20 20.5305 18.6568 22 17 22C15.3432 22 14 20.5305 14 18.7179C14 16.9054 15.254 15.626 17 14.2672Z",
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
