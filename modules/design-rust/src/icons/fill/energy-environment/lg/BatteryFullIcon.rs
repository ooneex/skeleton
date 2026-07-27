use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BatteryFullIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BatteryFullIcon(props: BatteryFullIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M46 30V18H42V30H46Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M37 9H8C4.68629 9 2 11.6863 2 15V33C2 36.3137 4.68629 39 8 39H37C40.3137 39 43 36.3137 43 33V15C43 11.6863 40.3137 9 37 9Z",
                fill: "currentColor",
            }
        }
    }
}
