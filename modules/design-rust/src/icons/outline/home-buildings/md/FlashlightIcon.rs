use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FlashlightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FlashlightIcon(props: FlashlightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13.9437 6.93183L25.1296 18.1178",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M12.8389 13.5076L4.29649 22.05C3.12492 23.2215 3.12492 25.121 4.29649 26.2926L5.71071 27.7068C6.88228 28.8784 8.78177 28.8784 9.95335 27.7068L18.552 19.1082",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M10.9461 21.0572L10.0033 22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15.9132 4.77634L14.9031 5.7865C11.7789 8.91069 11.7789 13.976 14.9031 17.1002C18.0273 20.2244 23.0926 20.2244 26.2168 17.1002L27.2269 16.0901C27.8406 15.4764 27.8406 14.4814 27.2269 13.8677L18.1356 4.77635C17.5219 4.16266 16.5269 4.16266 15.9132 4.77634Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M23 2V3",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M30 9H29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M28.5 3.5L27.5 4.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
