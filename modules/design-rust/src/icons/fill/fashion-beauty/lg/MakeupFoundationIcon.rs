use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MakeupFoundationIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MakeupFoundationIcon(props: MakeupFoundationIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M37 5H29V9H19L19 2H37V5Z",
                fill: "currentColor",
            }
            path {
                d: "M32 18V12H16V18H32Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M32 17C34.7614 17 37 19.2386 37 22V41C37 43.7614 34.7614 46 32 46H16C13.2386 46 11 43.7614 11 41V22C11 19.2386 13.2386 17 16 17H32ZM18 25V40H30V25H18Z",
                fill: "currentColor",
            }
        }
    }
}
