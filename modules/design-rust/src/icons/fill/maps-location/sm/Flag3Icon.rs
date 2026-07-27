use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Flag3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Flag3Icon(props: Flag3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3.68378 4.05135L6.38775 3.15003C8.76015 2.35923 11.3648 2.70803 13.4455 4.09519C15.1179 5.21011 17.2319 5.43023 19.0981 4.68375L22 3.523V17.6771L19.8409 18.5407C17.3632 19.5318 14.5565 19.2395 12.3361 17.7593C10.7689 16.7145 8.8071 16.4518 7.0202 17.0474L4.31623 17.9487L3.68378 4.05135Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 1V23H3V1H5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
