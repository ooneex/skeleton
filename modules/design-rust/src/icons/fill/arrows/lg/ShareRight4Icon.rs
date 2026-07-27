use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShareRight4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShareRight4Icon(props: ShareRight4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M41 33V41H4V44H44V33H41Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27 28.6213L39.1213 16.5L27 4.37866L24.8787 6.49998L34.8787 16.5L24.8787 26.5L27 28.6213Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 35L4 25.5C4 19.701 8.70101 15 14.5 15L37.0001 15L37.0001 18L14.5 18C10.3579 18 7 21.3579 7 25.5L7 35L4 35Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
