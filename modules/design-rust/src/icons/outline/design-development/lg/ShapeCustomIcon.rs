use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShapeCustomIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShapeCustomIcon(props: ShapeCustomIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M32.9347 6.41235L33.5697 16.2567L44.531 18.0168C46.0563 18.2616 46.5271 19.861 45.3039 20.6479L32.1295 29.1286L28.661 41.8278C28.1656 42.937 26.7428 43.356 25.7454 42.6598L17.0647 36.9124L4.61767 41.8579C3.04255 42.4841 1.40436 41.107 2.21392 39.8304L9.19638 28.8478L3.69665 19.9271C3.13641 19.026 3.82864 17.9282 5.05765 17.7825L19.3965 16.084L29.7023 5.55933C30.745 4.49305 32.8467 5.04722 32.9347 6.41235Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
