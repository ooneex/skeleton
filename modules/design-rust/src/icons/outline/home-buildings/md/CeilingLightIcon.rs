use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CeilingLightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CeilingLightIcon(props: CeilingLightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20 23V25C20 27.2091 18.2091 29 16 29C13.7909 29 12 27.2091 12 25V23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 3V6V5.33333",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 12H11V14H12V12ZM12 14H20V12H12V14Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M20 13.3942V10C20 7.79086 18.2091 6 16 6V6C13.7909 6 12 7.79086 12 10V13.3942L3.6358 17.6648C2.63187 18.1774 2 19.2095 2 20.3367V23H30V20.3367C30 19.2095 29.3681 18.1774 28.3642 17.6648L20 13.3942Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
