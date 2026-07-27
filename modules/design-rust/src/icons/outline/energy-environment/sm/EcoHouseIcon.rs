use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct EcoHouseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn EcoHouseIcon(props: EcoHouseIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M1.5 10.5L12 2L22.5 10.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4 13V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9.56961 16.5696C10.8405 17.7521 12.8323 17.816 14.0185 16.7123C16.473 14.4286 15.2796 10.5 15.2796 10.5C13.6574 12.0806 11.0354 10.9238 9.4162 12.4303C8.23005 13.5339 8.29873 15.3872 9.56961 16.5696Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M8 18.0696C8 17.4356 8.32577 17.039 8.81075 16.6306L9.5 16.0696L9.29127 16.2395",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
