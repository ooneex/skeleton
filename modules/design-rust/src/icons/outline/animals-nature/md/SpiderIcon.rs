use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SpiderIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SpiderIcon(props: SpiderIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 3V5.00008L21.5 7.5L21.7415 7.25848",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M8.00001 3.00012L8.00004 5.00012L10.5 7.50012L10.1832 7.18323",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21.3333 19.6667L26 25.0001L21.3333 29.6667",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M10.6667 19.6667L6.00001 25.0001L10.6667 29.6667",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M29.5 7.50012L28 11.0001L23.7427 11.7525L24 11.707",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M2.50001 7.50012L4 11.0001L8.25731 11.7525L8.00001 11.707",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M29.5 20.5001L28 17.0001L23.5 16.0001L23.9028 16.0896",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M2.5 20.5001L4 17.0001L8.5 16.0001L8.21985 16.0623",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 1V5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 5.00006C20.4183 5.00006 24 8.61822 24 13.0815C24 16.2208 22.228 18.942 19.6393 20.2801C19.8709 20.7915 20 21.3602 20 21.9594C20 24.191 18.2091 26.0001 16 26.0001C13.7909 26.0001 12 24.191 12 21.9594C12 21.3602 12.1291 20.7915 12.3607 20.2801C9.77198 18.942 8 16.2208 8 13.0815C8 8.61822 11.5817 5.00006 16 5.00006Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
