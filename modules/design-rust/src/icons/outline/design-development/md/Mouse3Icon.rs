use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Mouse3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Mouse3Icon(props: Mouse3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 3V14",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M6 14H26",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M6.57282 7.74792L6.02937 18.5133C5.74142 24.2174 10.2887 29 16 29C21.7113 29 26.2586 24.2174 25.9706 18.5133L25.4272 7.74792C25.2929 5.08786 23.097 3 20.4335 3L16 3L11.5665 3C8.90302 3 6.7071 5.08786 6.57282 7.74792Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
