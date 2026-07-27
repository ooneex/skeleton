use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GoldBarsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GoldBarsIcon(props: GoldBarsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12.5 20H5.5L2 29H16L12.5 20Z",
                fill: "currentColor",
            }
            path {
                d: "M26.5 20H19.5L16 29H30L26.5 20Z",
                fill: "currentColor",
            }
            path {
                d: "M19.5 11H12.5L9 20H23L19.5 11Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 0V4H15V0H17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 14L26 14L26 12L30 12L30 14Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 14L2 14L2 12L6 12L6 14Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27.3284 4.58581L24.5 7.41424L23.0858 6.00003L25.9142 3.1716L27.3284 4.58581Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7.5 7.41421L4.67157 4.58579L6.08579 3.17157L8.91422 6L7.5 7.41421Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
