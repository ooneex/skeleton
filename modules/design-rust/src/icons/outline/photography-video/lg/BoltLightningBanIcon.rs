use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BoltLightningBanIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BoltLightningBanIcon(props: BoltLightningBanIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24.0923 4H11.3846L6 27.4082L17.0526 27.4526L15.5789 41L34 19.102H20.7368L24.0923 4Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M32.5 43.5L43.5 32.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M38 46C42.4183 46 46 42.4183 46 38C46 33.5817 42.4183 30 38 30C33.5817 30 30 33.5817 30 38C30 42.4183 33.5817 46 38 46Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
