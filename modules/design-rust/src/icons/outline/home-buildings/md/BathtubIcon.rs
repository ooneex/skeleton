use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BathtubIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BathtubIcon(props: BathtubIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8 16V6C8 3.79086 9.79086 2 12 2V2C14.2091 2 16 3.79086 16 6V6",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M27 29L26 26L26.2454 26.7361",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M5 29L6 26L5.75465 26.7361",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 28L20 28C25.5228 28 30 23.5228 30 18L30 17C30 16.4477 29.5523 16 29 16L3 16C2.44772 16 2 16.4477 2 17L2 18C2 23.5228 6.47715 28 12 28Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16.5714 6L15.4286 6C13.535 6 12 7.53502 12 9.42857C12 9.74416 12.2558 10 12.5714 10L19.4286 10C19.7442 10 20 9.74416 20 9.42857C20 7.53502 18.465 6 16.5714 6Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
