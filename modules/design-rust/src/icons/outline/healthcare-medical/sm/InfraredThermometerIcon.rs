use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct InfraredThermometerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn InfraredThermometerIcon(props: InfraredThermometerIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 11L14.9276 14.5747C14.6738 15.4207 13.8952 16 13.0119 16H10.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M10.5846 19.5858L9.66269 18.6667L11.5654 12.4175C11.8217 11.5754 12.5984 11 13.4786 11H21V3H7L4 9L5.5 11L3.55529 19.5568C3.27086 20.8083 4.22212 22 5.50556 22H9.58668C10.3672 22 11 21.3672 11 20.5867C11 20.2111 10.8505 19.851 10.5846 19.5858Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13 7H16",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
