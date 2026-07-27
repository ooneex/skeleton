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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m16,7.5c-4.5242,0-6,4-7,8.5h-.1c-1.0132-5.0662-1.4-9-6.9-12",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m19.5,11c1.933,0,3.5-1.567,3.5-3.5s-1.567-3.5-3.5-3.5-3.5,1.567-3.5,3.5,1.567,3.5,3.5,3.5Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m3,21c.2761,0,.5-.2239.5-.5s-.2239-.5-.5-.5-.5.2239-.5.5.2239.5.5.5Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m15,21c.2761,0,.5-.2239.5-.5s-.2239-.5-.5-.5-.5.2239-.5.5.2239.5.5.5Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m9,21c.2761,0,.5-.2239.5-.5s-.2239-.5-.5-.5-.5.2239-.5.5.2239.5.5.5Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m21,21c.2761,0,.5-.2239.5-.5s-.2239-.5-.5-.5-.5.2239-.5.5.2239.5.5.5Z",
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
