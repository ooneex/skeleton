use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WindshieldCleanerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WindshieldCleanerIcon(props: WindshieldCleanerIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20 12.0229C23.0363 12.2758 26.052 12.8172 29 13.6471V28C20.52 25.6129 11.48 25.6129 3 28V13.6471C5.948 12.8172 8.96369 12.2758 12 12.0229",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 6V19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 6.33336V6C16 3.79086 17.7909 2 20 2V2C22.2091 2 24 3.79086 24 6V7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 6.33336V6C16 3.79086 14.2091 2 12 2V2C9.79086 2 8 3.79086 8 6V7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
