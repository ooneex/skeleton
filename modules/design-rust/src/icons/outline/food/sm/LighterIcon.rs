use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LighterIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LighterIcon(props: LighterIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 13V12H10V13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6 13H19V20C19 21.1046 18.1046 22 17 22H8C6.89543 22 6 21.1046 6 20V13Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4 13H6V2H4C2.89543 2 2 2.89543 2 4V11C2 12.1046 2.89543 13 4 13Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13 8C14.3808 8 15.5 6.95525 15.5 5.66638C15.5 4 13 2 13 2C13 2 10.5 4 10.5 5.66638C10.5 6.95438 11.6192 8 13 8Z",
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
