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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 11H24V13H21V11Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M0 11H3V13H0V11Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM12 13.4142L10 15.4142L8.58579 14L10.5858 12L8.58579 10L10 8.58582L12 10.5858L14 8.58582L15.4142 10L13.4142 12L15.4142 14L14 15.4142L12 13.4142Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
