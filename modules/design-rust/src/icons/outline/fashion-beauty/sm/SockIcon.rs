use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SockIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SockIcon(props: SockIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9 6H18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M5.5 14.5L11 20.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M8.99999 11V2H18V12.7121C18 13.5344 17.6624 14.3207 17.0662 14.8871L11.0409 20.6111C9.3703 22.1982 6.72283 22.1067 5.16576 20.4081C3.67513 18.782 3.72971 16.2703 5.28956 14.7104L8.99999 11Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
