use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BoltAutoIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BoltAutoIcon(props: BoltAutoIconProps) -> Element {
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
                d: "M21 21H16V19H21V21Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17.0857 14H19.7143L22.8 23H20.2977V21.8683L18.4 16.3333L16.494 21.8926V23H14L17.0857 14Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12.1225 0.0519409L11.5106 8.26245H18.6833L6.87755 21.9481L7.48939 13.7376H0.316711L12.1225 0.0519409Z",
                fill: "currentColor",
            }
        }
    }
}
