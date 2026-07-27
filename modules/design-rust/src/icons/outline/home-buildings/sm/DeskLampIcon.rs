use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DeskLampIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DeskLampIcon(props: DeskLampIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4.23223 9.85347L3.76776 10.3179C2.79144 11.2942 2.79144 12.8772 3.76776 13.8535C4.74407 14.8298 6.32698 14.8298 7.30329 13.8535L7.76777 13.389L6 11.6212L4.23223 9.85347Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M14 21L21 13L13 5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M17.1 21H11.9C11.4029 21 11 21.4029 11 21.9V22H18V21.9C18 21.4029 17.5971 21 17.1 21Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9.76343 5.70707L11.5 7.44363L11.8848 7.82836L15.4454 4.26771L14.3848 3.20705L13.3241 2.14641L9.76343 5.70707Z",
                fill: "currentColor",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M10.6422 15.435L11.3493 14.7279C13.6924 12.3848 13.6924 8.5858 11.3493 6.24265C9.00613 3.8995 5.20714 3.8995 2.864 6.24265L2.15689 6.94976L10.6422 15.435Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
