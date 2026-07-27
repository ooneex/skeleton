use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShoeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShoeIcon(props: ShoeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16.5 15.5L20.8098 21.799C22.0988 23.6828 24.4999 24.4546 26.6451 23.6745L28.5 23L28.8947 22.8563",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14 31.0267V36H3V31.0267",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M37.6726 35.5304L45 34.5V32.4654C45 29.2534 42.8139 26.4535 39.6978 25.6744L29 23L21 12H20L18.342 13.9327C15.1211 17.6874 9.92622 19.0808 5.25868 17.4419L4 17H3V31.0267H14L20.8174 33.6279C26.1849 35.6759 31.9837 36.3304 37.6726 35.5304Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
