use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ViewPlusSignIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ViewPlusSignIcon(props: ViewPlusSignIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 31V19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M18 25H30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 17C19.3137 17 22 14.3137 22 11C22 7.68629 19.3137 5 16 5C12.6863 5 10 7.68629 10 11C10 14.3137 12.6863 17 16 17Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M28.2528 18C29.799 16.1075 30.5 14.5 30.5 14.5C30.5 14.5 26.3571 5 16 5C5.64286 5 1.5 14.5 1.5 14.5C1.5 14.5 5.10597 22.7689 14 23.8776",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
