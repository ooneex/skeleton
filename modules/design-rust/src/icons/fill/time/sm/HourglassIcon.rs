use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HourglassIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HourglassIcon(props: HourglassIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m12,16c-3.314,0-6,2.686-6,6h12c0-3.314-2.686-6-6-6Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m19,22h-2v-5c0-1.678-.837-3.236-2.239-4.167l-1.254-.833,1.254-.833c1.402-.931,2.239-2.489,2.239-4.167V2h2v5c0,1.903-.769,3.695-2.103,5,1.334,1.305,2.103,3.097,2.103,5v5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m7,22h-2v-5c0-1.903.769-3.695,2.103-5-1.334-1.305-2.103-3.097-2.103-5V2h2v5c0,1.678.837,3.236,2.239,4.167l1.254.833-1.254.833c-1.402.931-2.239,2.489-2.239,4.167v5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "3",
                y: "1",
                width: "18",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "3",
                y: "21",
                width: "18",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
