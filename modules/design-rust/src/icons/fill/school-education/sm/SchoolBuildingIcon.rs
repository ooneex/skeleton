use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SchoolBuildingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SchoolBuildingIcon(props: SchoolBuildingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 0H16V2L13 3V6H11V0Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18 7.43359V11H23V21H14V16H10V21H1V11H6V7.43359L12 3.83398L18 7.43359ZM4.00391 17H7.00391V14H4.00391V17ZM17 17H20V14H17V17ZM10.0049 9.00488V12.0049H14.0049V9.00488H10.0049Z",
                fill: "currentColor",
            }
        }
    }
}
