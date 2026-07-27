use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChevronLeft2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChevronLeft2Icon(props: ChevronLeft2IconProps) -> Element {
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
                d: "M16.4055 1.84387L8.28058 12L16.4055 22.1562L14.8438 23.4056L5.71933 12L14.8438 0.594482L16.4055 1.84387Z",
                fill: "currentColor",
            }
        }
    }
}
