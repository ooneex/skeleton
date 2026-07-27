use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PilcrowIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PilcrowIcon(props: PilcrowIconProps) -> Element {
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
                d: "M23 2V30H21V2H23Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14 2V30H12V2H14Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 9C2 5.13401 5.13401 2 9 2H28V4H9C6.23858 4 4 6.23858 4 9C4 11.7614 6.23858 14 9 14H14V16H9C5.13401 16 2 12.866 2 9Z",
                fill: "currentColor",
            }
        }
    }
}
