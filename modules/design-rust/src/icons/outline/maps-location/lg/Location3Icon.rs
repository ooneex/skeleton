use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Location3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Location3Icon(props: Location3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M37.1771 32.5493C41.9482 33.8325 45 35.7975 45 38C45 41.866 35.598 45 24 45C12.402 45 3 41.866 3 38C3 35.7975 6.05182 33.8325 10.8229 32.5493",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M10 16.9638C10 28.2928 24 39 24 39C24 39 38 28.3194 38 16.9638C38 8.06125 30.8244 3 24 3C17.1756 3 10 8.06125 10 16.9638Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            circle {
                cx: "24",
                cy: "17",
                r: "5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
