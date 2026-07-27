use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NumberNineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NumberNineIcon(props: NumberNineIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M18 43H22C29.732 43 36 36.732 36 29L36 17V17.4686",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12 17V19C12 25.6274 17.3726 31 24 31C30.6274 31 36 25.6274 36 19V17C36 10.3726 30.6274 5 24 5C17.3726 5 12 10.3726 12 17Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
