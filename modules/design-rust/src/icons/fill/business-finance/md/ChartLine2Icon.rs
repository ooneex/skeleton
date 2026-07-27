use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChartLine2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChartLine2Icon(props: ChartLine2IconProps) -> Element {
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
                d: "M31.7071 9.70709L20 21.4153L12 13.4152L1.70707 23.7072L0.292923 22.2929L12 10.5868L20 18.5868L30.2929 8.29294L31.7071 9.70709Z",
                fill: "currentColor",
            }
        }
    }
}
