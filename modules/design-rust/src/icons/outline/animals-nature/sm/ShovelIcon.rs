use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShovelIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShovelIcon(props: ShovelIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17.5477 6.44975C16.376 5.27807 16.376 3.37878 17.5477 2.20711L18.2548 1.5L22.4974 5.74264L21.7903 6.44975C20.6186 7.62142 18.7193 7.62142 17.5477 6.44975Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M17.5477 6.44974L9.06239 14.935",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M3.40554 20.5919C5.35816 22.5445 8.52398 22.5445 10.4766 20.5919L14.7192 16.3492L7.64818 9.27817L3.40554 13.5208C1.45292 15.4734 1.45292 18.6393 3.40554 20.5919Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
