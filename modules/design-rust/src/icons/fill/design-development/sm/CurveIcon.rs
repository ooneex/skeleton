use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CurveIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CurveIcon(props: CurveIconProps) -> Element {
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
                d: "M22 22L2 22L2 2L4 2L4 20L22 20L22 22Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 18H21V3C18.4581 3 16.7406 3.94028 15.5179 5.38531C13.3105 7.99399 13.1455 11.7345 10.9554 14.3228C10.1156 15.3153 8.95812 16 6 16V18Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
