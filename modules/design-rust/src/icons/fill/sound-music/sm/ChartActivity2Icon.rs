use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChartActivity2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChartActivity2Icon(props: ChartActivity2IconProps) -> Element {
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
                d: "M15.0555 1.00409L19.2555 13.6043L20.7964 11H24V13H21.9369L18.7445 18.3957L14.9445 6.99588L8.94454 22.9959L4.81476 10.6065L3.61803 13H0V11H2.38197L5.18524 5.39344L9.05546 17.0041L15.0555 1.00409Z",
                fill: "currentColor",
            }
        }
    }
}
