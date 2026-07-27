use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Paintbrush4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Paintbrush4Icon(props: Paintbrush4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 22V14H21V22H9V17H7V22H3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8.81781 3.60473C8.57855 1.69065 10.071 0 12 0C13.929 0 15.4215 1.69065 15.1822 3.60473L14.6129 8.15944L18.4562 8.75072C19.9197 8.97588 21 10.2351 21 11.7158V12H3V11.7158C3 10.2351 4.08033 8.97588 5.54383 8.75072L9.38715 8.15944L8.81781 3.60473ZM12 4C12.5523 4 13 3.55228 13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3C11 3.55228 11.4477 4 12 4Z",
                fill: "currentColor",
            }
        }
    }
}
