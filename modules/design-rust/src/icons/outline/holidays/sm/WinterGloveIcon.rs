use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WinterGloveIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WinterGloveIcon(props: WinterGloveIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M6 18H19",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M6 11.6713V8.5C6 4.91015 8.91015 2 12.5 2C16.0899 2 19 4.91015 19 8.5V22H6.00001V17.4027L2.2135 13.44C1.49707 12.6902 1.50837 11.5062 2.23898 10.7703C2.9486 10.0554 4.09091 10.0132 4.85137 10.6737L6 11.6713Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
