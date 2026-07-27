use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SuperscriptIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SuperscriptIcon(props: SuperscriptIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M29 15H22V14.6562L27.4651 10.7073C28.4291 10.0108 29 8.89382 29 7.70457V7.5C29 5.567 27.4015 4 25.4685 4V4C23.57 4 22 5.53902 22 7.4375V7.4375",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16.8231 4H17L3 28H3.18048",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16.8231 28H17L3 4H3.18048",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
