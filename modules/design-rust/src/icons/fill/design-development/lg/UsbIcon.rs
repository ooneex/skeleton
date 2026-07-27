use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UsbIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UsbIcon(props: UsbIconProps) -> Element {
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
                d: "M10 2H38V22L10 22V2ZM27 12V19.0001H31V12H27ZM17 19.0001V12H21V19.0001H17Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M40 25H8V31C8 39.8366 15.1634 47 24 47C32.8366 47 40 39.8366 40 31V25ZM28 33V30H20V33H28Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
