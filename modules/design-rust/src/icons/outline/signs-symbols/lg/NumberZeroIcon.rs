use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NumberZeroIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NumberZeroIcon(props: NumberZeroIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M36 31V17C36 10.3726 30.6274 5 24 5C17.3726 5 12 10.3726 12 17V31C12 37.6274 17.3726 43 24 43C30.6274 43 36 37.6274 36 31Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
