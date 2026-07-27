use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HandTruckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HandTruckIcon(props: HandTruckIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13.1088 3.79413L13.8852 6.69191",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M8.55653 21.5783C10.1569 21.1495 11.1067 19.5045 10.6778 17.9041C10.249 16.3037 8.60401 15.3539 7.00361 15.7827C5.40321 16.2116 4.45347 17.8566 4.88229 19.457C5.31112 21.0574 6.95613 22.0071 8.55653 21.5783Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M7.00361 15.7827L3.89778 4.19162L1.5 4.83411",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M10.6779 17.9041L22.5 14.7363",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17.9384 2.50001L8.27911 5.0882L10.2203 12.3326C10.4347 13.1328 11.2572 13.6077 12.0574 13.3933L18.8189 11.5816C19.6191 11.3672 20.0939 10.5446 19.8795 9.74445L17.9384 2.50001Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
