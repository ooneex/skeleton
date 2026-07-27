use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GlassWaterIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GlassWaterIcon(props: GlassWaterIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4.98125 12H19.007",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M4 3L5.80232 19.2209C5.91486 20.2337 6.77099 21 7.79009 21H16.2099C17.229 21 18.0851 20.2337 18.1977 19.2209L20 3H4Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
