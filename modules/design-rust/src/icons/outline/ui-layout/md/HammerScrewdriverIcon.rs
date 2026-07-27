use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HammerScrewdriverIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HammerScrewdriverIcon(props: HammerScrewdriverIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m18.726,23.797l4.6,4.969c1.484,1.602,4.002,1.651,5.546.107,1.544-1.544,1.496-4.062-.107-5.546l-3.794-3.513",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "13.667",
                y1: "13.667",
                x2: "10",
                y2: "10",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            polygon {
                points: "2 4 4 2 10 5 10 10 5 10 2 4",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m23.6,12.645l-14.927,16.121c-1.484,1.602-4.002,1.651-5.546.107h0c-1.544-1.544-1.496-4.062.107-5.546l16.207-15.006",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-cap": "butt",
            }
            path {
                d: "m26.51,15.671l4-4-7.51-8.032c-2.231-2.197-5.817-2.183-8.031.032h0l11.541,12Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
