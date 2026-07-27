use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WindmillIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WindmillIcon(props: WindmillIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20 46L23 32H25L28 46H20Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M22.5 19.5C20 14.5 20.8864 6.93172 23 2H25C27.1136 6.93172 28 14.5 25.5 19.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M20.2189 23.4509C14.6388 23.7859 8.52765 28.3377 5.31346 32.6339L6.31346 34.366C11.6412 33.7306 18.6388 30.7141 21.7189 26.049",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M27.7811 23.4509C33.3612 23.7859 39.4724 28.3377 42.6866 32.6339L41.6866 34.366C36.3588 33.7306 29.3612 30.7141 26.2811 26.049",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M24 27C26.2091 27 28 25.2091 28 23C28 20.7909 26.2091 19 24 19C21.7909 19 20 20.7909 20 23C20 25.2091 21.7909 27 24 27Z",
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
