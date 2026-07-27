use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RouteOpenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RouteOpenIcon(props: RouteOpenIconProps) -> Element {
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
                d: "M16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26C21.5228 26 26 21.5228 26 16C26 10.4772 21.5228 6 16 6ZM21.9142 13L20.5 11.5858L15 17.0858L12 14.0858L10.5858 15.5L15 19.9142L21.9142 13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
