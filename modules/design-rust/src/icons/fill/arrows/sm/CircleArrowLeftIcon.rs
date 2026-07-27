use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleArrowLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleArrowLeftIcon(props: CircleArrowLeftIconProps) -> Element {
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
                d: "M23 12C23 5.92487 18.0751 1 12 1C5.92487 0.999999 1 5.92487 1 12C0.999999 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM18 11L18 13L9.41422 13L12.6568 16.2426L11.2426 17.6568L5.58576 12L11.2426 6.34314L12.6568 7.75735L9.41415 11L18 11Z",
                fill: "currentColor",
            }
        }
    }
}
