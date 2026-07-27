use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ToggleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ToggleIcon(props: ToggleIconProps) -> Element {
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
                d: "M15 10C7.26801 10 1 16.268 1 24C1 31.732 7.26801 38 15 38H33C40.732 38 47 31.732 47 24C47 16.268 40.732 10 33 10H15ZM15 15C10.0294 15 6 19.0294 6 24C6 28.9706 10.0294 33 15 33C19.9706 33 24 28.9706 24 24C24 19.0294 19.9706 15 15 15Z",
                fill: "currentColor",
            }
        }
    }
}
