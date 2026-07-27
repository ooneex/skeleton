use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowTrendUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowTrendUpIcon(props: ArrowTrendUpIconProps) -> Element {
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
                d: "M12.9999 17.4142L22.207 8.20708L20.7928 6.79286L12.9999 14.5858L6.99991 8.58576L0.0856934 15.5L1.49991 16.9142L6.99991 11.4142L12.9999 17.4142Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 15V6H14V8H21V15H23Z",
                fill: "currentColor",
            }
        }
    }
}
