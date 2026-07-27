use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TagIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TagIcon(props: TagIconProps) -> Element {
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
                d: "M24.4226 4H4V24.4226L22.6762 42.5744C25.0285 44.8607 28.781 44.834 31.1006 42.5144L42.5144 31.1007C44.834 28.7811 44.8607 25.0286 42.5744 22.6762L24.4226 4ZM20 16C20 18.2091 18.2091 20 16 20C13.7909 20 12 18.2091 12 16C12 13.7909 13.7909 12 16 12C18.2091 12 20 13.7909 20 16Z",
                fill: "currentColor",
            }
        }
    }
}
