use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Glasses3dIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Glasses3dIcon(props: Glasses3dIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2 13H30",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M6 17H11V20H6V17Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M21 17H26V20H21V17Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M9 6.5V6.5C8.57645 5.44113 7.13903 5.29146 6.50642 6.24036L2 13V24L13 24.6562L13.9326 22.3592C14.2756 21.5143 15.0965 20.9615 16.0085 20.9615V20.9615C16.9256 20.9615 17.7501 21.5205 18.0897 22.3724L19 24.6562L30 24V13L25.4936 6.24036C24.861 5.29146 23.4235 5.44113 23 6.5V6.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
