use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HammerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HammerIcon(props: HammerIconProps) -> Element {
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
                d: "M16.5 6.08578L21.4142 11L20 12.4142L15.0858 7.5L16.5 6.08578Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M9.07539 6.43934L14.0251 11.3891L20.3891 5.02513L15.4393 0.0753937L9.07539 6.43934Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 9H6V11H2V9Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4.5 4.08578L7.41421 7L6 8.41421L3.08578 5.5L4.5 4.08578Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 14H22V18H20C18.8954 18 18 18.8954 18 20V23H7V19H6C3.79086 19 2 17.2091 2 15V14Z",
                fill: "currentColor",
            }
        }
    }
}
