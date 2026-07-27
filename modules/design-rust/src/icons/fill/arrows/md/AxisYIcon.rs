use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AxisYIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AxisYIcon(props: AxisYIconProps) -> Element {
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
                d: "M31 21L12.4142 21.0001L3.00001 30.4144L1.58578 29.0002L11 19.5859L11 2.5L13 2.5L13 19.0001L31 19L31 21Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20.4853 9.57096L12 1.08569L3.5147 9.57097L4.92891 10.9852L12 3.91411L19.0711 10.9852L20.4853 9.57096Z",
                fill: "currentColor",
            }
        }
    }
}
