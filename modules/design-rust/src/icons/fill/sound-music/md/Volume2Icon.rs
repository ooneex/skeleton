use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Volume2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Volume2Icon(props: Volume2IconProps) -> Element {
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
                d: "M31 17L27 17L27 15L31 15L31 17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27.8284 7.58579L25 10.4142L23.5858 9L26.4142 6.17157L27.8284 7.58579Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M26.4142 25.8284L23.5858 23L25 21.5858L27.8284 24.4142L26.4142 25.8284Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M20 0.881017L10.1412 9H5C2.79086 9 1 10.7909 1 13V19C1 21.2091 2.79086 23 5 23H10.1412L20 31.119V0.881017Z",
                fill: "currentColor",
            }
        }
    }
}
