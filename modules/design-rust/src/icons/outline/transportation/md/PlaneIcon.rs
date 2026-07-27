use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PlaneIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PlaneIcon(props: PlaneIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13.1428 11.0001L12 5.00005L14.5 4.50005L18.4 11.0001",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M5 11L7.5 14L28.5001 14.0002C29.8808 14.0003 31 15.1195 31 16.5001C31 17.8808 29.8808 19 28.5001 19L21 19L14.5 28.537L12 28.037L14 19L6.80802 19C6.01343 19 5.2942 18.5296 4.97571 17.8016L2 11H5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
