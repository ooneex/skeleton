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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M34.1607 13.8441C31.5938 11.2772 31.4637 7.24616 33.8703 4.83963L35.7099 3L45.0049 12.295L43.1652 14.1346C40.7587 16.5411 36.7277 16.4111 34.1607 13.8441Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M34.1607 13.8441L16.3454 31.6595",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M5.88853 42.1164C9.73864 45.9665 15.9336 46.0138 19.7254 42.2221L25.3939 36.5535L28.3514 34.3706L13.6343 19.6536L11.4514 22.6111L5.78291 28.2796C1.99114 32.0714 2.03843 38.2663 5.88853 42.1164Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
