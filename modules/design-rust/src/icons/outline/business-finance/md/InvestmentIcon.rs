use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct InvestmentIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn InvestmentIcon(props: InvestmentIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 29C16 29 17.7639 25.2253 21.1587 23.2653C24.5535 21.3053 28.1244 22 28.1244 22C28.1244 22 27.2029 26.7039 23.8687 28.6289C20.4739 30.5889 16 29 16 29Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 29C16 29 14.2361 25.2253 10.8413 23.2653C7.44646 21.3053 3.87561 22 3.87561 22C3.87561 22 4.79711 26.7039 8.13131 28.6289C11.5261 30.5889 16 29 16 29Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 28.5L16 20",
                stroke: "currentColor",
                stroke_width: "2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M16 20C20.9706 20 25 15.9706 25 11C25 6.02944 20.9706 2 16 2C11.0294 2 7 6.02944 7 11C7 15.9706 11.0294 20 16 20Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 8V14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
