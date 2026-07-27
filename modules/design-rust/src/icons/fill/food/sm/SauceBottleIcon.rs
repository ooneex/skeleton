use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SauceBottleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SauceBottleIcon(props: SauceBottleIconProps) -> Element {
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
                d: "M18 20C18 21.6569 16.6569 23 15 23H9C7.34315 23 6 21.6569 6 20V8H18V20ZM8 19H16V17H8V19ZM8 12V14H16V12H8Z",
                fill: "currentColor",
            }
            path {
                d: "M12.6934 0L14.1934 4H18V6H6V4H9.8877L11.291 0H12.6934Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
