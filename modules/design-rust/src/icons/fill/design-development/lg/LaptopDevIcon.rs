use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LaptopDevIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LaptopDevIcon(props: LaptopDevIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M1 33V37C1 39.2091 2.79086 41 5 41H43C45.2091 41 47 39.2091 47 37V33H32V35C32 35.5523 31.5523 36 31 36H17C16.4477 36 16 35.5523 16 35V33H1Z",
                fill: "currentColor",
            }
            path {
                d: "M9.5 5C5.91015 5 3 7.91015 3 11.5V30H6V11.5C6 9.567 7.567 8 9.5 8H22C22 9.10457 22.8954 10 24 10C25.1046 10 26 9.10457 26 8H38.5C40.433 8 42 9.567 42 11.5V30H45V11.5C45 7.91015 42.0899 5 38.5 5H9.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M26.8787 27L32.8786 21.0001L26.8786 15L29 12.8787L37.1213 21.0001L29 29.1213L26.8787 27Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21.1213 27L15.1214 21.0001L21.1213 15.0001L19 12.8788L10.8787 21.0001L19 29.1213L21.1213 27Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
