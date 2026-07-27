use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct IronIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn IronIcon(props: IronIconProps) -> Element {
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
                d: "M5.20931 2H15.0001V4H6.82748L5.97371 8H14.305C17.5227 8 20.326 10.1936 21.0996 13.317L22.0119 17H2.00769L5.20931 2Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 19H22V21H2V19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
