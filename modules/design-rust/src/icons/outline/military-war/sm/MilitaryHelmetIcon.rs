use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MilitaryHelmetIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MilitaryHelmetIcon(props: MilitaryHelmetIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 12.5V20C11 21.6569 12.3431 23 14 23V23C15.6569 23 17 21.6569 17 20V17",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M21.9506 13L19.9031 13C18.3842 13 16.9476 12.3096 15.9988 11.1235L15.3015 10.2518C14.1628 8.82854 12.439 8 10.6163 8H2.81477",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M21.9506 12C21.9506 6.47715 17.4735 2 11.9506 2C6.76528 2 2.50172 5.94668 2 11V12H8.57823C10.1078 12 11.5532 12.7001 12.5014 13.9002L13.4492 15.0998C14.3975 16.2999 15.8429 17 17.3724 17H21.9506L21.9506 12Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
