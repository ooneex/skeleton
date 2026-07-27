use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowTrendDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowTrendDownIcon(props: ArrowTrendDownIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12.9999 6.58582L22.207 15.7929L20.7928 17.2071L12.9999 9.41424L6.99991 15.4142L0.0856934 8.50003L1.49991 7.08582L6.99991 12.5858L12.9999 6.58582Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 9V18H14V16H21V9H23Z",
                fill: "currentColor",
            }
        }
    }
}
