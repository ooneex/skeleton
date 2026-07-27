use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleArrowDown2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleArrowDown2Icon(props: CircleArrowDown2IconProps) -> Element {
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
                d: "M12 23C5.92486 23 0.999997 18.0751 1 12C1 5.92486 5.92487 0.999999 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM13 5.99998L13 11.5L17 11.5L12 18.1667L7 11.5L11 11.5L11 5.99998L13 5.99998Z",
                fill: "currentColor",
            }
        }
    }
}
