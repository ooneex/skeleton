use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ClapperboardIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ClapperboardIcon(props: ClapperboardIconProps) -> Element {
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
                d: "M2 10H22V22H2V10ZM11 16V18H13V16H17V14H7V16H11Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8.90506 7.91265L6.24086 4.32072L7.84722 3.12925L10.5114 6.72118L8.90506 7.91265Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14.8139 6.87078L12.1497 3.27885L13.7561 2.08738L16.4203 5.67931L14.8139 6.87078Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M0.961548 3.7821L20.6577 0.309141L21.6996 6.21799L2.00344 9.69095L0.961548 3.7821ZM3.27846 5.40442L3.62576 7.37404L19.3827 4.59567L19.0354 2.62605L3.27846 5.40442Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
