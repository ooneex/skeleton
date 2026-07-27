use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Pin2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Pin2Icon(props: Pin2IconProps) -> Element {
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
                d: "M13 13V22H11V13H13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 8C5 4.13401 8.13401 1 12 1C15.866 1 19 4.13401 19 8C19 11.866 15.866 15 12 15C8.13401 15 5 11.866 5 8Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18 21H22V23H18V21Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 21H2V23H6V21Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15.634 17.634L19.0981 15.634L20.0981 17.3661L16.634 19.3661L15.634 17.634Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8.36603 17.634L4.90193 15.634L3.90193 17.3661L7.36603 19.3661L8.36603 17.634Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
