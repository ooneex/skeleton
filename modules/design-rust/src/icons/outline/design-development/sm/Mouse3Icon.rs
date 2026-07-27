use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Mouse3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Mouse3Icon(props: Mouse3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 2V11",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M4.5 11H19.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M4.80999 5.80025L4.3995 14.01C4.18217 18.3567 7.64787 22 12 22C16.3521 22 19.8178 18.3567 19.6005 14.01L19.19 5.80025C19.0836 3.67141 17.3265 2 15.195 2L8.805 2C6.6735 2 4.91643 3.67141 4.80999 5.80025Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
