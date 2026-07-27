use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Pen3WritingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Pen3WritingIcon(props: Pen3WritingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M27.9623 10.403L36.2309 18.6716C37.793 20.2337 37.793 22.7663 36.2309 24.3284L32.3022 28.2571C31.6407 28.9187 31.6407 29.9912 32.3022 30.6528V30.6528C32.9637 31.3143 34.0363 31.3143 34.6978 30.6528L35.8506 29.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M5 43H43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M7.71228 37.4715L16.7808 35.8276L38.359 14.2494C40.4713 12.137 40.5217 8.76256 38.4714 6.71231C36.4212 4.66206 33.0467 4.71241 30.9343 6.82477L9.35617 28.4029L7.71228 37.4715Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
