use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BigBenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BigBenIcon(props: BigBenIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21 22H19V15H21V22Z",
                fill: "currentColor",
            }
            path {
                d: "M17 22H15V15H17V22Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 1V3.78353L8 1.32639L4 3.78353V1H2V13H14V1H12ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 13V23H17V13H19Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 13V23H15V21H21V13H23Z",
                fill: "currentColor",
            }
            path {
                d: "M3 15H13V23H9V19H7V23H3V15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
