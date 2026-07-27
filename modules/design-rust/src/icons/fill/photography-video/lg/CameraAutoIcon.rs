use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CameraAutoIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CameraAutoIcon(props: CameraAutoIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M26.5355 26.5H21.4735L24.0012 20.2586L26.5355 26.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M46 16C46 12.6863 43.3137 10 40 10L35 10L30.5 4H17.5L13 10L8 10C4.68629 10 2 12.6863 2 16L2 36C2 39.3137 4.68629 42 8 42L40 42C43.3137 42 46 39.3137 46 36V16ZM20.2586 29.5L19.5 31.3732V33H15.6045L22.4891 16H25.5099L32.4127 33H28.5V31.3381L27.7536 29.5H20.2586Z",
                fill: "currentColor",
            }
        }
    }
}
