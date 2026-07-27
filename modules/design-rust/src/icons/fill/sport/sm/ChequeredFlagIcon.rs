use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChequeredFlagIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChequeredFlagIcon(props: ChequeredFlagIconProps) -> Element {
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
                d: "M21.3984 18H2.5L3.5 10H9.06934L9.62207 6H4V4H22.9023L21.3984 18ZM9.4541 12L9.09082 16H14.083L14.416 12H9.4541ZM15.2422 10H20.2461L20.6758 6H15.6641L15.2422 10Z",
                fill: "currentColor",
            }
            path {
                d: "M5.09961 2.11035L2.88965 23.0996L0.900391 22.8896L3.11035 1.90039L5.09961 2.11035Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
