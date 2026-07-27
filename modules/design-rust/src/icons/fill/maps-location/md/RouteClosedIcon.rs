use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RouteClosedIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RouteClosedIcon(props: RouteClosedIconProps) -> Element {
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
                d: "M28 15H32V17H28V15Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M0 15H4V17H0V15Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16C26 21.5228 21.5228 26 16 26C10.4772 26 6 21.5228 6 16ZM12 10.5858L16 14.5858L20 10.5858L21.4142 12L17.4142 16L21.4142 20L20 21.4142L16 17.4142L12 21.4142L10.5858 20L14.5858 16L10.5858 12L12 10.5858Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
