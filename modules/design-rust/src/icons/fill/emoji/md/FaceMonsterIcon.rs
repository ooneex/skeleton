use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FaceMonsterIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FaceMonsterIcon(props: FaceMonsterIconProps) -> Element {
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
                d: "M1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16ZM16 6C12.134 6 9 9.13401 9 13C9 16.866 12.134 20 16 20C19.866 20 23 16.866 23 13C23 9.13401 19.866 6 16 6ZM20 25V23H12V25H20Z",
                fill: "currentColor",
            }
            circle {
                cx: "16",
                cy: "13",
                r: "2",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
