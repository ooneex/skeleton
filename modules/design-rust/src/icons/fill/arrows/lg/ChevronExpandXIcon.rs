use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChevronExpandXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChevronExpandXIcon(props: ChevronExpandXIconProps) -> Element {
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
                d: "M29.1508 11.2721L41.8787 24L29.1508 36.7279L31.2721 38.8492L46.1213 24L31.2721 9.15076L29.1508 11.2721Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18.8492 11.2721L6.1213 24L18.8492 36.7279L16.7279 38.8492L1.87866 24L16.7279 9.15076L18.8492 11.2721Z",
                fill: "currentColor",
            }
        }
    }
}
