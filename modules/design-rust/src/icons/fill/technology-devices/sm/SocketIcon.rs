use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SocketIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SocketIcon(props: SocketIconProps) -> Element {
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
                d: "M22 5C22 3.34315 20.6569 2 19 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34314 22 5 22H19C20.6569 22 22 20.6569 22 19V5ZM15 16V17H9V16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16ZM9 7V11H7V7H9ZM17 7H15V11H17V7Z",
                fill: "currentColor",
            }
        }
    }
}
