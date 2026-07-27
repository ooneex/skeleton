use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CameraClockIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CameraClockIcon(props: CameraClockIconProps) -> Element {
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
                d: "M27 6C29.2091 6 31 7.79086 31 10L31 25C31 27.2091 29.2091 29 27 29L5 29C2.79086 29 1 27.2091 1 25V10C1 7.79086 2.79086 6 5 6H8.5L11.5 2H20.5L23.5 6L27 6ZM17 11.5H15V19H24V17H17V11.5Z",
                fill: "currentColor",
            }
        }
    }
}
