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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1ZM24.8688 22.7762L16 5.84497L7.13124 22.7762L16 19.6664L24.8688 22.7762Z",
                fill: "currentColor",
            }
        }
    }
}
