use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ScreenTouchIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ScreenTouchIcon(props: ScreenTouchIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17 5H10C7.23858 5 5 7.23858 5 10L5 17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M17 43H10C7.23858 43 5 40.7614 5 38L5 31",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M43 17L43 10C43 7.23858 40.7614 5 38 5L31 5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M43 31L43 38C43 40.7614 40.7614 43 38 43L31 43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M19 25.7273V12.5C19 11.1193 20.1193 10 21.5 10V10C22.8807 10 24 11.1193 24 12.5V19.5909L31.2066 21.7406C33.0071 22.1738 34.2045 23.8826 34 25.7273L32.7757 38H20V35.5455L16.2044 31.1162C15.4511 30.4192 15.0227 29.4383 15.0227 28.4108L15.0227 25.5228C15.0227 23.6024 16.5795 22.0455 18.5 22.0455V22.0455",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
