use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct KitchenTimerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn KitchenTimerIcon(props: KitchenTimerIconProps) -> Element {
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
                d: "M15 6H17V2H26C28.2091 2 30 3.79086 30 6V14.9932H26V16.9932H30V26C30 28.2091 28.2091 30 26 30H17V26H15V30H6C3.79086 30 2 28.2091 2 26V6C2 3.79086 3.79086 2 6 2H15V6ZM7.08594 8.5L12.5537 13.9688C12.202 14.5641 12 15.2584 12 16C12 18.2091 13.7909 20 16 20C16.7417 20 17.4358 19.7971 18.0312 19.4453L20.5 21.9141L21.9141 20.5L19.4453 18.0312C19.7971 17.4358 20 16.7417 20 16C20 13.7909 18.2091 12 16 12C15.2584 12 14.5641 12.202 13.9688 12.5537L8.5 7.08594L7.08594 8.5ZM2.00684 16.9932H6V14.9932H2.00684V16.9932Z",
                fill: "currentColor",
            }
            path {
                d: "M16 14C17.1046 14 18 14.8954 18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16C14 14.8954 14.8954 14 16 14Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
