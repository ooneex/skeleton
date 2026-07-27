use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PointerCircle2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PointerCircle2Icon(props: PointerCircle2IconProps) -> Element {
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
                d: "M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM17.8395 16.4931L12 5.34485L6.16045 16.4931L12 14.9005L17.8395 16.4931Z",
                fill: "currentColor",
            }
        }
    }
}
