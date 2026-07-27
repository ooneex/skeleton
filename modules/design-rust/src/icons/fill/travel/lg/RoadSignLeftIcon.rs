use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RoadSignLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RoadSignLeftIcon(props: RoadSignLeftIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M27 46H21V29H27V46Z",
                fill: "currentColor",
            }
            path {
                d: "M21 7L27 7L27 2L21 2L21 7Z",
                fill: "currentColor",
            }
            path {
                d: "M10.9102 26L3.64941 18L10.9102 10L42 10L42 26L10.9102 26Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
