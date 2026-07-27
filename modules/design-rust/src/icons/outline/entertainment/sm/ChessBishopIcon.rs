use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChessBishopIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChessBishopIcon(props: ChessBishopIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10 10V10C10.3148 12.2033 9.57379 14.4262 8 16L6 18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M8 10H16",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M18 18L16 16C14.4262 14.4262 13.6852 12.2033 14 10V10",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M12 10C10.3431 10 9 9.01633 9 7.08333C9 5.15034 10.3431 3 12 3C13.6569 3 15 5.15034 15 7.08333C15 9.01633 13.6569 10 12 10Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M12 3C11.1716 3 10.5 2.32843 10.5 1.5C10.5 0.671573 11.1716 -2.7463e-07 12 -2.38419e-07C12.8284 -2.02207e-07 13.5 0.671573 13.5 1.5C13.5 2.32843 12.8284 3 12 3Z",
                fill: "currentColor",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M18.5 18H5.5C4.67157 18 4 18.6716 4 19.5V22H20V19.5C20 18.6716 19.3284 18 18.5 18Z",
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
