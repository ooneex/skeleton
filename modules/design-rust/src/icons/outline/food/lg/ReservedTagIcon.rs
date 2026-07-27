use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ReservedTagIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ReservedTagIcon(props: ReservedTagIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8.5 10L6.66249 10L2.69396 30.4279C2.33421 32.2797 3.75251 34 5.6389 34L12 34",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M45.2224 34.3714L40 10L7.0747 10L12.3972 34.8381C12.7924 36.6824 14.4222 38 16.3084 38L42.289 38C44.199 38 45.6226 36.2389 45.2224 34.3714Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M33.2105 20L18.5 20L20.2895 28L35 28L33.2105 20Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
