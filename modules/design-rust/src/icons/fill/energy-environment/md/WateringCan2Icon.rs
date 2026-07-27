use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WateringCan2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WateringCan2Icon(props: WateringCan2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11 4C8.23858 4 6.00001 6.23858 6.00001 9L6.00001 10L4.00001 10L4.00001 9C4.00001 5.13401 7.13401 2 11 2C14.866 2 18 5.13401 18 9L18 10L16 10L16 9C16 6.23858 13.7614 4 11 4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 24L30 20L32 20L32 24L30 24Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 30L30 26L32 26L32 30L30 30Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M26 28L26 24L28 24L28 28L26 28Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M31.2868 12.8726L28.6355 10.2213L21 15.1619V9H0.999999V25C0.999999 27.2091 2.79086 29 5 29L18.3944 29C19.7319 29 20.9808 28.3316 21.7226 27.2188L31.2868 12.8726Z",
                fill: "currentColor",
            }
        }
    }
}
