use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextUnderlineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextUnderlineIcon(props: TextUnderlineIconProps) -> Element {
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
                d: "M2 20H22V22H2V20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 2V11C7 13.7614 9.23858 16 12 16C14.7614 16 17 13.7614 17 11V2H19V11C19 14.866 15.866 18 12 18C8.13401 18 5 14.866 5 11V2H7Z",
                fill: "currentColor",
            }
        }
    }
}
