use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CheckboxUncheckedIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CheckboxUncheckedIcon(props: CheckboxUncheckedIconProps) -> Element {
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
                d: "M4 10C4 6.68629 6.68629 4 10 4H38C41.3137 4 44 6.68629 44 10V38C44 41.3137 41.3137 44 38 44H10C6.68629 44 4 41.3137 4 38V10ZM10 7C8.34315 7 7 8.34315 7 10V38C7 39.6569 8.34315 41 10 41H38C39.6569 41 41 39.6569 41 38V10C41 8.34315 39.6569 7 38 7H10Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
