use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WateringCanIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WateringCanIcon(props: WateringCanIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22.9702 36.3132L8.52325 21.8654",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M24.0001 11L20.5618 7.56168C19.1834 6.18332 17.0122 5.99924 15.4215 7.12587L9.63403 11.2248C7.61163 12.6572 7.36508 15.5651 9.11747 17.3175L11.5839 19.7839",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M26.0818 13.0552L27.1424 11.9945C28.8998 10.2371 31.749 10.2371 33.5064 11.9945V11.9945C35.2637 13.7519 35.2637 16.6011 33.5064 18.3585L32.4457 19.4191",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M46 42V43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M40 30L28.186 29.305L34 21L24 10.997L4 24.999L20 41L23.521 35.969L40 35",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M40 30L46 28V37.001L40 35.004V30Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
