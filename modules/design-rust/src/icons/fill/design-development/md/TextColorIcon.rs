use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextColorIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextColorIcon(props: TextColorIconProps) -> Element {
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
                d: "M2 23C2 21.3431 3.34315 20 5 20H27C28.6569 20 30 21.3431 30 23V27C30 28.6569 28.6569 30 27 30H5C3.34315 30 2 28.6569 2 27V23Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20.5 14H11.5V12H20.5V14Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14.8185 2H17.1815L23.4673 18H20.8801V16.8842L16 4.46211L11.1133 16.901V18H8.53275L14.8185 2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
