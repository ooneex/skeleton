use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PenNibIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PenNibIcon(props: PenNibIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 22H21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M13.5283 8.45728C12.55 7.48295 10.9671 7.48617 9.99282 8.46446C9.01849 9.44275 9.02171 11.0257 10 12C10.9783 12.9743 12.5612 12.9711 13.5355 11.9928C14.5099 11.0145 14.5066 9.4316 13.5283 8.45728Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M10 12L4 18",
                stroke: "currentColor",
                stroke_width: "2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M8.54695 3.37891L13.4504 1.55901L20.441 8.54967L18.6211 13.4531C17.8006 15.6638 15.7613 17.1889 13.4089 17.3511L4.00001 18L4.64892 8.59115C4.81116 6.23871 6.33627 4.1994 8.54695 3.37891Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
        }
    }
}
