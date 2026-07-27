use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ThumbsUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ThumbsUpIcon(props: ThumbsUpIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15 18V42",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M20.116 4.47762L15.2915 18L5.00001 18L5.00001 41L32.1206 43.6246C34.4013 43.8453 36.5402 42.4874 37.3109 40.3295L44.0911 21.3454C45.0215 18.7404 43.0903 16 40.3242 16L27 16L27.3598 5.86391C27.4347 3.75247 25.7433 2 23.6306 2C22.0531 2 20.6461 2.99191 20.116 4.47762Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
