use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BlenderIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BlenderIcon(props: BlenderIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20.4258 4C21.514 4 22.388 4.86556 22.4248 5.92773L22.4209 6.14258L22.0635 11.1426C21.9887 12.189 21.1184 12.9998 20.0693 13H17V11H20.0693L20.4258 6H17.5V4H20.4258Z",
                fill: "currentColor",
            }
            path {
                d: "M16 1V3H8V1H16Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17.9592 15L18.0021 15.1191C18.7941 17.4619 18.8977 19.6968 18.4865 22.1641L18.3469 23H5.6535L5.51385 22.1641C5.09575 19.6552 5.21023 17.3862 6.03924 15H17.9592ZM10.0051 17V19H14.0051V17H10.0051Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16.4229 2C17.5195 2.00018 18.3964 2.87885 18.4219 3.94922L18.416 4.16602L17.6797 13H6.32715L5.71191 5.47949L4 3.94727V2H16.4229ZM11 11.0098H13V9H11V11.0098ZM11 5V7.00977H13V5H11Z",
                fill: "currentColor",
            }
        }
    }
}
