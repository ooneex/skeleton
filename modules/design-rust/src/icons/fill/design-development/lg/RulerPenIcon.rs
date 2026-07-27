use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RulerPenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RulerPenIcon(props: RulerPenIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M41 13H29V39.3621L35 46.5621L41 39.3621V13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 2H23V46H7V2ZM10 30V33H14V30H10ZM10 37V40H17V37H10ZM10 25.5V22.5H17V25.5H10ZM10 18H14V15H10V18ZM10 11L17 11V8H10V11Z",
                fill: "currentColor",
            }
            path {
                d: "M41 10V2L29 2.00013V10H41Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
