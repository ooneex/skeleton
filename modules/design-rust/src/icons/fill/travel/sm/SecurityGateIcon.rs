use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SecurityGateIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SecurityGateIcon(props: SecurityGateIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "22 23 20 23 20 3 4 3 4 23 2 23 2 1 22 1 22 23",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "12",
                cy: "6.5",
                r: "2.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m16.07,12.156c-.131-.522-.464-.974-.912-1.236-2.064-1.217-4.248-1.218-6.314-.001-.45.264-.783.715-.913,1.237l-1.096,4.381,2.195,1.098.269,5.367h5.402l.269-5.367,2.195-1.098-1.095-4.38Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
