use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsFromLineXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsFromLineXIcon(props: ArrowsFromLineXIconProps) -> Element {
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
                d: "M20 25.5L4 25.5L4 22.5L20 22.5L20 25.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M28 25.5L44 25.5L44 22.5L28 22.5L28 25.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M36 13.8787L46.1213 24L36 34.1213L33.8787 32L41.8787 24L33.8787 16L36 13.8787Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 13.8787L1.8787 24L12 34.1213L14.1213 32L6.12134 24L14.1213 16L12 13.8787Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.5 4V44H22.5V4H25.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
