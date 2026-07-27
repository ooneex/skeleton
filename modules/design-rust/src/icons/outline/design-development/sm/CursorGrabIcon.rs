use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CursorGrabIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CursorGrabIcon(props: CursorGrabIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11.5 12V14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M15.5 12V14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M7 10.0001V6.33651C7 5.10893 8.09566 4.17108 9.30854 4.36046L18.2185 5.75166C19.6891 6.1046 20.667 7.49701 20.5 9.00012L19.5 20.0001H8V18.0001L4.96516 14.391C4.34991 13.8231 4 13.0239 4 12.1866V9.00012C4 7.89555 4.89543 7.00012 6 7.00012H6.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
