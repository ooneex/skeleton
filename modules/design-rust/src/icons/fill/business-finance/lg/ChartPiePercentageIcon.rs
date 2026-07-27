use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChartPiePercentageIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChartPiePercentageIcon(props: ChartPiePercentageIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22.5 5C11.1782 5 2 14.1782 2 25.5C2 36.8218 11.1782 46 22.5 46C33.8218 46 43 36.8218 43 25.5V24.5H23.5V5H22.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44.6213 5.49998L29.5 20.6213L27.3787 18.5L42.5 3.37866L44.6213 5.49998Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M34 6.5C34 4.567 32.433 3 30.5 3C28.567 3 27 4.567 27 6.5C27 8.433 28.567 10 30.5 10C32.433 10 34 8.433 34 6.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M45 17.5C45 15.567 43.433 14 41.5 14C39.567 14 38 15.567 38 17.5C38 19.433 39.567 21 41.5 21C43.433 21 45 19.433 45 17.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
