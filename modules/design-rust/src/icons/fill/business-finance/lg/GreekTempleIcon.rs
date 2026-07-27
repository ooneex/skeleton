use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GreekTempleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GreekTempleIcon(props: GreekTempleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17.5 37.5L17.5 16.5L20.5 16.5L20.5 37.5L17.5 37.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27.5 37.5L27.5 16.5L30.5 16.5L30.5 37.5L27.5 37.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M37.5 37.5L37.5 16.5L40.5 16.5L40.5 37.5L37.5 37.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7.5 37.5L7.5 16.5L10.5 16.5L10.5 37.5L7.5 37.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M46 43H2V40C2 37.7909 3.79086 36 6 36H42C44.2091 36 46 37.7909 46 40V43Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 11.4318L24 2L46 11.4318V18H2V11.4318ZM24 7C22.067 7 20.5 8.567 20.5 10.5C20.5 12.433 22.067 14 24 14C25.933 14 27.5 12.433 27.5 10.5C27.5 8.567 25.933 7 24 7Z",
                fill: "currentColor",
            }
        }
    }
}
