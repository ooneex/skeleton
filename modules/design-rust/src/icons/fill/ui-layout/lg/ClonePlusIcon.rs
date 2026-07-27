use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ClonePlusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ClonePlusIcon(props: ClonePlusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M38 44C41.3137 44 44 41.3137 44 38L44 20C44 16.6863 41.3137 14 38 14L37 14L37 29C37 33.4183 33.4183 37 29 37L14 37L14 38C14 41.3137 16.6863 44 20 44L38 44Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M28 34C31.3137 34 34 31.3137 34 28L34 10C34 6.68629 31.3137 4 28 4H10C6.68629 4 4 6.68629 4 10L4 28C4 31.3137 6.68629 34 10 34L28 34ZM20.5 11V17.5H27V20.5H20.5V27H17.5V20.5H11V17.5H17.5V11H20.5Z",
                fill: "currentColor",
            }
        }
    }
}
