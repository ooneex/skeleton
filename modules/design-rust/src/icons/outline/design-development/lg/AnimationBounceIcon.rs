use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AnimationBounceIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AnimationBounceIcon(props: AnimationBounceIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m31,15c-7.5,0-11.5,6-12.9999,16.9999h-.1c-1.5001-10.9999-3.6501-19.9999-14.9001-24.4999",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m38.5,22.5c4.1421,0,7.5-3.3579,7.5-7.5s-3.3579-7.5-7.5-7.5-7.5,3.3579-7.5,7.5,3.3579,7.5,7.5,7.5Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m6,42c.8284,0,1.5-.6716,1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5,1.5.6716,1.5,1.5,1.5Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m30,42c.8284,0,1.5-.6716,1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5,1.5.6716,1.5,1.5,1.5Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m18,42c.8284,0,1.5-.6716,1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5,1.5.6716,1.5,1.5,1.5Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m42,42c.8284,0,1.5-.6716,1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5,1.5.6716,1.5,1.5,1.5Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}
